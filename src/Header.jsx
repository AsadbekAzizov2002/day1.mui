import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Companent, Docs, Home, Pages } from './pages'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className='w-[1300px] container mx-auto p-4'>
    <div className=' flex items-center justify-between' >
        <h1 className=' text-3xl font-bold'>ZONE</h1>
        <ul className=' flex space-x-3'>
          <li className=' cursor-pointer transition-colors hover:text-blue-500'>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className=' cursor-pointer transition-colors hover:text-blue-500'>
            <NavLink to="/companent">Companent</NavLink>
          </li>
          <li className=' cursor-pointer transition-colors hover:text-blue-500'>
            <NavLink to="/pages">Pages</NavLink>
          </li>
          <li className=' cursor-pointer transition-colors hover:text-blue-500'>
            <NavLink to="/docs">Docs</NavLink>
          </li>
        </ul>
        <div className=' gap-4 '>
        <SearchIcon/>
        <SettingsIcon/>
         <Button className=" ml-2" variant="contained" disableElevation>
     Buy Now
    </Button>
        </div>
    </div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/companent" element={<Companent/>}/>
          <Route path="/pages" element={<Pages/>}/>
          <Route path="/docs" element={<Docs/>}/>
        </Routes>
    </div>

  )
}

export default Header