import netflixMovies from "../data/movies";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const HomePage = () => {

//   const sum = (a:number,  b:number) => {
//     return a  + b
//   }
//  console.log(sum(2, 3)) 

  return (
    <div>
      <h1>Hej Home page</h1>
      <NavBar />
      <div className="movie-list">
        {netflixMovies.map((movie) => {
          return (
            <Link key={movie.id} to={`/details/${movie.id}`}>
              <Card movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
