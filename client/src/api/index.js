export async function login({ email, password }) {
  return await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function searchFilms({ keyword, year, type }, token) {
  const requestBaseUrl = '/api/homepage/getFilms';

  return await fetch(`${requestBaseUrl}/${keyword}/${type}/${year}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function verifyToken({ token }) {
  return await fetch('/api/auth/me', {
    method: 'GET',
    headers: { 'x-access-token': token }
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function logout() {
  return await fetch('/api/auth/logout', {
    method: 'GET'
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
