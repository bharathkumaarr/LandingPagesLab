import React from 'react'
import '../App.css'
function container() {
    const links = [
    {
      title: 'Guide',
      href: '#',
    },
    {
      title: 'Login',
      href: '#',
    },
    {
      title: 'Pricing',
      href: '#',
    }
  ]
  return (
    <div className='navbar-root'>
    <div className='logo'>Finta.</div>
    <div className='links'>
      {links.map((link, idx)=> <a className='link-items' href={link.href}>{link.title}</a>)}

      <button className='btn'> Start free trial</button>
    </div>

   </div>
  )
}

export default container
