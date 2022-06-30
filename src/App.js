import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import classes from './style/App.module.scss'
import NavMenu from './components/UI/Menu/NavMenu'
import Home from './pages/Home'
import About from './pages/About'
import Anime from './pages/Anime'
import Search from './pages/Search'
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <div className= {classes.App}>
        <NavMenu/>
        <Routes>
          <Route path='/' exact="true" element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile:id' element={<Anime/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
