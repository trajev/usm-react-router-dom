import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-4 items-center '>


    <Link to="/" className='text-3xl'>
        <img src="https://imgs.search.brave.com/775FmGGWDibHKqpL6d0FxXZZxdQRhlBl5lLSmcxxrLM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MTYwNTYyMjc2MDAw/YjAwMDQ1YTdkOTcu/cG5n" alt="logo" className='w-28 ' />
    </Link>

    <Link to="/" className='text-xl cursor-pointer'>Home</Link>


    <div className='flex gap-3'>
        <Link to="/login" className='px-3 bg-green-700  hover:bg-green-800 text-white py-2 rounded-md font-medium'>Login</Link>
        <Link to="/signup" className='px-3 bg-green-700  hover:bg-green-800 text-white py-2 rounded-md font-medium'>SignUp</Link>
    </div>

    </div>
  )
}

export default Navbar