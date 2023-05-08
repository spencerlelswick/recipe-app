import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Error from './components/Error'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import SingleCocktail from './pages/SingleCocktail'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='cocktail/:id' element={<SingleCocktail />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
