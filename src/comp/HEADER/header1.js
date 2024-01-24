import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import './header.css';
import {Link ,useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Search from '../search'
const Header = () => {
  // const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/${i}`)
    }
  };
  const [i ,setI]=useState('')
  // const send =()=>{
  //    <Link className="mr-5 text-white text-900 hover:text-white"  to={`/${i}`}></Link>
  // }
  return (
    <>
      <header className="text-white-600 body-font header">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0" to='/'>
      <img className='imge' alt='no img' src='https://penji.co/wp-content/uploads/2022/02/2.-kion.jpg'/>
      <span className="ml-2 text-3xl text-white hover:text-red">Music Portal</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mar">
  <Link className="mr-5 text-white text-900 hover:text-white zyx" to='/categories'>Categories</Link>
      <Link className="mr-5 text-white text-900 hover:text-white zyx" to='/newreleases'>New Releases</Link>
      <a className="mr-5 text-white text-900 hover:text-white zyx" href='www.google.com'>Third Link</a>
      <a className="mr-5 text-white text-900 hover:text-white zyx" href='www.google.com'>Fourth Link</a>
    </nav>
    {/* <button className="inline-flex items-center bg-gray-100 border-1 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
  <div className='searchbox'>
  <input className='search' type='text' value={i} onChange={(e)=>{setI(e.target.value)}} onKeyDown={handleKeyDown} placeholder='  Search Here'/>
   <Link className="mr-5 text-white text-900 hover:text-white"  to={`/${i}`}><Button>Search</Button></Link>
  </div>
</header>
    </>
  )
}

export default Header
