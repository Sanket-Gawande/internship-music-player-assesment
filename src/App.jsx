import React from 'react'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Album from './Components/Album'
import Albums from './Components/Albums'
import Player from './Components/Player'

const App = () => {
  return (
    <div className="bg-slate-200 min-h-screen w-screen relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/album/:name" element={<Album />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
      <Player />
    </div>
  )
}

export default App
