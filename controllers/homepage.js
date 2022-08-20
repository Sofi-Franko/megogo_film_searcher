const fetch = require("cross-fetch");
const axios = require("axios");
const { response } = require("express");
const redis = require("redis");

const OMB_BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "apikey=59d135fb"

let redisClient;
(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error: ${error}`));

  await redisClient.connect();
})();

const getFilms = async (req, res = response) => {
  const params = req.params;
  let results;
  let isCached = false;

  const filterString = _prepareFilterString(params)

  try {
    const cacheResults = await redisClient.get(filterString);
    if (cacheResults) {
      isCached = true;
      results = JSON.parse(cacheResults);
    } else {
      const response = await axios.get(`${OMB_BASE_URL}?${API_KEY}&${filterString}`)

      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }

      const { Search = [] } = response.data;
      await redisClient.set(filterString, JSON.stringify(Search));

      results = Search;
    }

    res.json({itemList: results, fromCache: isCached});
  } catch (err) {
    console.error(err);
  }
};

function _prepareFilterString({keyword, year, type}) {
  let object = {};
  object.searchCaseString = `s=${keyword}`;
  object.yearCaseString = year !== "all" ? `y=${year}` : "";
  object.typeCaseString = type !== "all" ? `type=${type}` : "";

  return Object.values(object).filter(param => !!param).join("&");
}

module.exports = {
  getFilms,
};
