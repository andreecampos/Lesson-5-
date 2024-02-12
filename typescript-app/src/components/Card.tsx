import { Movie } from '../types'

interface CardProps {
    movie: Movie
    // name?: string | number
}

const Card = ({movie} : CardProps) => {
   // const test = name || "andree"
  return (
   <article className='article-card'>
    <img src={movie.image}/>
    <h3 className='movie-title'>{movie.title}</h3>
   </article>
  )
}

export default Card
