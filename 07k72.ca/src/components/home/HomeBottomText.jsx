import React from 'react'
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <Link to='/projects' className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] leading-[5.5vw] border-5 border-white rounded-full px-14 pt-5 uppercase'>Projects</Link>
      <Link to='/agence' className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] leading-[5.5vw] border-5 border-white rounded-full px-14 pt-5 uppercase'>Agence</Link>

    </div>
  )
}

export default HomeBottomText