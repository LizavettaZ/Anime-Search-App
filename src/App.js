import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/App.module.scss'
import NavMenu from './components/UI/Menu/NavMenu'
import Home from './pages/Home'
import About from './pages/About'
import Anime from './pages/Anime'
import Search from './pages/Search'
import Contact from './pages/Contact'
import AlertState from './context/alert/AlertState'
import RequestState from './context/request/RequestState'


function App() {
  return (
    <RequestState>
      <AlertState>
        <BrowserRouter>
          <NavMenu/>
          <Routes>
            <Route path='/' exact="true" element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/anime/:id' element={<Anime/>}/>
            <Route path='/search/anime/:id' element={<Anime/>}/>
          </Routes>
        </BrowserRouter>
      </AlertState>
    </RequestState>
  )
}

export default App
