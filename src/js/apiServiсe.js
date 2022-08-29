import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '2bbca05b4a0698db2e0a185255a0cc70&page';

export default class filmsAPI {
  constructor() {
    this.currentPage = 0;
    this.lang = 'uk';
    this.Genres = [];
  }
  async getTrendingFilms() {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${this.currentPage}&language=${this.lang}`
    );
    return response;
  }
  async getFilmID(filmID) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmID}?api_key=${API_KEY}&language=${this.lang}`
    );
    return response;
  }
  async getMovieSearch(str) {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${str}&page=${this.currentPage}&include_adult=false&language=${this.lang}`
    );
    return response;
  }
  async getGenres() {
    const response = await axios.get(
      `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=${this.lang}`
    );
    return response;
  }
  async getFilmTrailler() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmID}/videos?api_key=${API_KEY}&language=${this.lang}`
    );
    return response;
  }
}
