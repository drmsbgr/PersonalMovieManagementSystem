import axios from 'axios';

const API_KEY = 'a7d97ada';
const IMDB_ID = 'tt3896198';
const BASE_URL = `https://www.omdbapi.com`;
const API_URL = `https://www.omdbapi.com/?i=${IMDB_ID}&apikey=${API_KEY}`;

export const searchMovies = async (query: string) => {
  const res = await axios.get(`${API_URL}&s=${query}`);
  return res.data.Search;
};

export const getMovieDetails = async (id: string) => {
  const res = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}&plot=full`);
  return res.data;
};