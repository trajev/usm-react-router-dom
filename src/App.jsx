import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./components/Login"
import Signup from './components/Signup';
import Home from './components/Home';
import Error from './components/Error';
import Navbar from './components/Navbar';

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/Signup" element={<Signup />}>  </Route>
        <Route path="/login" element={<Login />}>  </Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App