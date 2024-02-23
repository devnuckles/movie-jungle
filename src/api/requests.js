const key = `97a5184a4dae2e4fce5f3a97378e5f56`;
const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2E1MTg0YTRkYWUyZTRmY2U1ZjNhOTczNzhlNWY1NiIsInN1YiI6IjY1ZDc3Y2VjY2U5ZTkxMDE2M2I3NmYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.81gxT0keQ5oc6k5DaitHpOGwBHU0pR5ZPvyKWlJNEk8`;

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}
    `,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}
    `,
};

export default requests;
