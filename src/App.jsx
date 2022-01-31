import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages'
import DetailsPage from './pages/DetailsPage.jsx'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details/:type/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  )
}
// ;<Page />
export default App
