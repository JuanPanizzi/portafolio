import React from 'react'
import logoJuan from '../recursos/logoJuan.png'
import '../css/NavBar.css' 
export const NavBar = () => {

  return (

    <header className='rounded-bottom navBar'>
      
      <nav className=' d-flex justify-content-between align-items-center '>

      <div className='logoJuan'>
        <img src={logoJuan} alt="rocket" />
      </div>

      <div className='container-links '>
      <a href='#proyectos' >Proyectos</a>
      <a href="#skills">Skills</a>
      <a href='#sobreMi' >Sobre Mí</a>
      <a href='#tit-contactame' >Contacto</a>
      </div>
      </nav>
    </header>
  )
}
