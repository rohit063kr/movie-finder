import { API_URL, API_KEY, TIMEOUT_SEC } from './config.js';
import { timeout } from './helper.js';
import 'regenerator-runtime';

export const state = {
  search: {
    results: [],
    query: '',
  },
  page: [],
};

export const getSearchData = async function (query) {
  try {
    // Requesting for data
    const res = await Promise.race([
      timeout(TIMEOUT_SEC),
      fetch(`${API_URL}?${API_KEY}&s=${query}`),
    ]);
    console.log(res);
    // extracting data
    const data = await res.json();
    console.log(data);

    // manipulating status data for error handling
    data.Response = data.Response === 'True' ? true : false;
    if (!data.Response)
      throw new Error(`We couldn't find product for your query! please try another product or try again later
     ${res.status}`);

    // initializing states
    state.search.query = query;
    state.search.results = [];

    data.Search.forEach(el =>
      state.search.results.push({
        poster: el.Poster,
        title: el.Title,
        type: el.Type,
        year: el.Year,
        imdbID: el.imdbID,
      })
    );
  } catch (err) {
    throw err;
  }
};

export const getPageData = async function (id) {
  try {
    const res = await Promise.race([
      timeout(TIMEOUT_SEC),
      fetch(`${API_URL}?${API_KEY}&i=${id}`),
    ]);
    const data = await res.json();
    console.log(data);
    state.page = [];
    state.page.push({
      actors: data.Actors,
      awards: data.Awards,
      boxOffice: data.BoxOffice,
      country: data.Country,
      dvd: data.DVD,
      director: data.Director,
      genre: data.Genre,
      language: data.Language,
      metascore: data.Metascore,
      plot: data.Plot,
      poster: data.Poster,
      production: data.Production,
      rated: data.Rated,
      ratings: data.Ratings,
      released: data.Released,
      response: data.Response,
      runtime: data.Runtime,
      title: data.Title,
      type: data.Type,
      website: data.Website,
      writer: data.Writer,
      year: data.Year,
      imdbID: data.imdbID,
      imdbRating: data.imdbRating,
      imdbVotes: data.imdbVotes,
    });
  } catch (err) {
    throw err;
  }

  console.log(state.page);
};
