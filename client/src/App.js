import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sigin from './pages/Sigin'
import Signup from './pages/Signup'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signin' element={<Sigin />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/projects' element={<Projects />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}
