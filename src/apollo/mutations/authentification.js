export const SIGNIN = (login) => fetch(`${process.env.REACT_APP_API_AUTH_URL}/login`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(login),
})
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
  });

export const SIGNUP = (login) => fetch(`${process.env.REACT_APP_API_AUTH_URL}/sign-up`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(login),
})
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
  });

export const SPECIAL_LOGIN = (login) => fetch(`${process.env.REACT_APP_API_AUTH_URL}/special-login`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(login),
})
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
  });
