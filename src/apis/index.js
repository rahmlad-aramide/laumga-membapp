import axios from "axios";

export const BASE_URL = "https://laumga-membapp-api.onrender.com";

export async function signUp(firstName, lastName, email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        const errorMessage = err.response.data.message || err.message;
        reject(new Error(errorMessage));
      });
  });
}

export async function signIn(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/auth/signin`, {
        email,
        password,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        const errorMessage = err.response.data.message || err.message;
        // console.log(err.response.data.message)
        reject(new Error(errorMessage));
      });
  });
}
