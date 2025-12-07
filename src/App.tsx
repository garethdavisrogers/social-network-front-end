import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './features/Home';
import './App.css'

function App() {

  const [user, setUser] = useState<Object>({});

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
