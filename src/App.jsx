import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages'
import DetailsPage from './pages/DetailsPage.jsx'
import NotFound from './pages/NotFound.jsx'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/details/:type/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
