import React from 'react'
import '../css/Proyectos.css'
import { Card } from './Card'
import { infoCard } from '../recursos/config'

export const Proyectos = () => {
  return (
    <section className='sectionProyectos d-flex flex-column align-items-center justify-content-evenly mt-5  ' id='proyectos'>
        
        <h1 className='text-center ' >¡Mira mis proyectos!</h1>
    
    <article className='articleProyectos rounded-3 p-3 pt-4 my-5  '>
        
        <div className='w-100  cards-container'>
        {infoCard.map(({titulo,imagen,descripcion, linkGithub, linkDemo})=>(
          <Card img={imagen} title={titulo} descripcion={descripcion} linkDemo={linkDemo} linkGithub={linkGithub}/>
        ))}

        
        {/* <Card/> */}
        </div>
        {/* <button className='btn-verProyecto  d-block mx-auto btn rounded-3 verMas-btn'>Ver más proyectos</button> */}
        
    </article>
    </section>
  )
}
