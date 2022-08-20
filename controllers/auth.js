const { response } = require("express");
const jwt = require('jsonwebtoken');

const login = async (req, res = response) => {
  const { email, password } = req.body;

  // Ideally search the user in a database,
  // throw an error if not found.
  if (password !== "1234") {
    return res.status(400).json({
      msg: "User / Password are incorrect",
    });
  }

  // if user is found and password is valid
  // create a token
  const token = jwt.sign({ user: email }, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });

  // return the information including token as JSON
  res.status(200).send({ auth: true, email, token });

  // res.json({ token })
};

const getUser = (req, res = response) => {
  const { user } = req.body;

  // if (err) return res.status(500).send("There was a problem finding the user.");
  if (!user) return res.status(404).send("No user found.");

  res.status(200).send({user});
}


module.exports = {
  login,
  getUser
};
