import { searchMoviesFromTheMovieDB } from "../../themoviedbAPI/searchMoviesFromTheMovieDB.js";
import { addMovieToWatchlistTheMovieDatabase } from '../../themoviedbAPI/addMovieToWatchistTheMovieDatabase.js'

export const postMovieToWatchlist = async (request, reply) => {
  request.log.info('/ addMovieToPlaylist');

  const searchTerm = (request.query.searchTerm || "").trim().toLowerCase()
  const accountId = request.query.accountId

  const searchedMovieList = await searchMoviesFromTheMovieDB(searchTerm)

  if(!searchedMovieList.length){
    return reply.code(404).send({
      message: "No movies found"
    });
  }

  const movieToAdd = searchedMovieList[0]

  const result = await addMovieToWatchlistTheMovieDatabase(movieToAdd.id, accountId)

  return { result };
}
