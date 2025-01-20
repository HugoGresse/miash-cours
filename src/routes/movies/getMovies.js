import {searchMoviesFromTheMovieDB} from "../../themoviedbAPI/searchMoviesFromTheMovieDB.js";


export const getMovies =  async (request, reply) => {
  request.log.info('/ getMovies');
  const searchTerm = (request.query.searchTerm || "").trim().toLowerCase()

  const searchedMovieList = await searchMoviesFromTheMovieDB(searchTerm)

  return {
    matchedMovies: searchedMovieList
  };
}
