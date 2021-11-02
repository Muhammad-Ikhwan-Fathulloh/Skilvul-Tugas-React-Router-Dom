import { useLocation } from "react-router";
import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";

import movies from "../dummy-data";

const MovieList = () => {
  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  let queryParams = useLocation().search.slice(1);
  const QS = require("qs");
  const params = QS.parse(queryParams);

  const filter = {
    show: Number(params.show) || shows[0],
    category: params.category || categories[0],
    sort: params.sort || fields[0],
  };

  const Sorted = (key) => {
    return (val1, val2) => {
      if (!val1.hasOwnProperty(key) || !val2.hasOwnProperty(key)) {
        return 0;
      }

      const data1 =
        typeof val1[key] === "string" ? val1[key].toUpperCase() : val1[key];
      const data2 =
        typeof val2[key] === "string" ? val2[key].toUpperCase() : val2[key];

      let comp = 0;
      if (data1 > data2) {
        comp = 1;
      } else if (data1 < data2) {
        comp = -1;
      }

      return comp;
    };
  };

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  const filteredMovies = movies
    .filter((movie) => movie.type === filter.category)
    .sort(Sorted(filter.sort))
    .slice(0, filter.show);

  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;