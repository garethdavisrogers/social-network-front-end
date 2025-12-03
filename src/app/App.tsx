import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
