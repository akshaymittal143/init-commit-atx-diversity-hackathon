import axios from 'axios';

export const FETCH_POSTS = 'fetch-poster';
export const CREATE_POST = 'create-post';

const ROOT_URL = 'http://initcommit-jdemieville.c9users.io';

export function fetchPosters() {
  const request = axios
    .get(`${ROOT_URL}/posters`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err); // Handle the error here. E.g. use this.setState() to display an error msg.
    });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPoster(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posters/new`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}
