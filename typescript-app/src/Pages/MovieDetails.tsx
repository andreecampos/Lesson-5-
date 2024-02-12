import { useParams } from "react-router-dom"
import netflixMovies from "../data/movies"

const MovieDetails = () => {

const {id} = useParams()

const showDetails = netflixMovies.find((i) => i.id === id)

if(!showDetails) {
    return <h1>Movies details not found</h1>
}
  return (
    <div>
        <h1>Movie detail</h1>
        <h2>{showDetails.title}</h2>
        <img src={showDetails.image}/>
      
    </div>
  )
}

export default MovieDetails
