import HomePage from './Pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import AboutMe from './Pages/AboutMe'
import MovieDetails from './Pages/MovieDetails'
import Forms from './Pages/Forms'
import ResultPage from './Pages/ResultPage'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about-me' element={<AboutMe/>} />
      <Route path='/details/:id' element={<MovieDetails/>} />
      <Route path='/form' element={<Forms/>} />
      <Route path='/result' element={<ResultPage/>} />
    </Routes>
  )
}

export default App
