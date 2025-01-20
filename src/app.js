import { getMovies } from "./routes/movies/getMovies.js";
import { postMovieToWatchlist } from "./routes/movies/postMovieToWatchlist.js";

export default async function app(fastify, options) {
  // Register routes
  fastify.get('/movies', getMovies);
  fastify.post('/playlists', postMovieToWatchlist);
}
