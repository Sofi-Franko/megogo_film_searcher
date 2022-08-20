import React, { useState, useEffect } from 'react';
import { searchFilms } from '../../api';
import { useNavigate } from 'react-router';

import { Container, Row, Button, Alert, Spinner, CardColumns } from 'react-bootstrap';
import FilmCard from './film-card';
import SearchForm from './search-form';
import { useAuth } from '../../context';

function Homepage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [token, setToken] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [noFilmsFound, setNoFilmsFound] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filterMap, setFilterMap] = useState({ type: 'all', year: null });
  const [films, setFilms] = useState([]);

  const onLogout = async (event) => {
    event.preventDefault();

    try {
      await auth.logout();
    } catch (e) {
      console.log(`e`, e);
    }

    navigate('/');
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  useEffect(async () => {
    let films;

    if (keyword) {
      setIsLoading(true);

      const year = _prepareYear(filterMap.year);

      const { itemList } = await searchFilms({ ...filterMap, year, keyword }, token);
      films = itemList;

      setNoFilmsFound(!films || !films.length);
      setIsLoading(false);
    } else {
      films = [];
      setNoFilmsFound(false);
    }

    setFilms(films);
  }, [keyword, filterMap.type, filterMap.year]);

  return (
    <Container fluid>
      <Row className="mt-2 mb-2 justify-content-end" noGutters>
        <Button variant="outline-danger" onClick={onLogout}>
          Log out
        </Button>
      </Row>
      <Row noGutters>
        <h1>Welcome!</h1>
      </Row>
      <Row className="mt-2" noGutters>
        <h6>Enter the film you would like to watch.</h6>
      </Row>
      <Row noGutters>
        <SearchForm
          filterMap={filterMap}
          onChangeFilterMap={setFilterMap}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </Row>
      {isLoading && (
        <Row className="justify-content-center mb-5">
          <Spinner animation="border" variant="primary" />
        </Row>
      )}
      {noFilmsFound && !isLoading ? (
        <Alert variant={'info'}>No results were found for the entered keyword/s.</Alert>
      ) : (
        <CardColumns>
          {films.map((film) => (
            <FilmCard key={film.imdbID} film={film} />
          ))}
        </CardColumns>
      )}
    </Container>
  );
}

// HELPERS
const _prepareYear = (year) => {
  if (year === null) {
    return 'all';
  } else {
    return new Date(year).getFullYear().toString();
  }
};

export default Homepage;
