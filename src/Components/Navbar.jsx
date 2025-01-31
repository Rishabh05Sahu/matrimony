import React from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between pt-4 w-[98%]'>
       <img className='h-30 pl-10 max-sm:h-12' src={logo} alt="" />
       <h3 onClick={()=>navigate("/login")}
       className='font-bold  text-xl px-5 py-2 rounded-4xl bg-white cursor-pointer hover:text-gray-500 max-sm:px-3 max-sm:py-1 max-sm:text-base' >Login</h3>
    </div>
  )
}

export default Navbar
