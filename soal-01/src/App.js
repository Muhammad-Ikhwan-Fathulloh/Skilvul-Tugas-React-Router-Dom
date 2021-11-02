import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieList from "./pages/MovieList";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/movies" component={MovieList} exact />
            <Route path="/movies/:id" component={Movie} exact />
            <Route path="*" component={NotFound} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}