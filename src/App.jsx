import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketReward from './pages/MarketReward'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<MarketReward />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
