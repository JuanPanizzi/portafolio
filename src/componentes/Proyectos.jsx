import React from 'react'
import '../css/Proyectos.css'
import { Card } from './Card'
import { infoCard } from '../recursos/config'

export const Proyectos = () => {
  return (
    <section className='sectionProyectos d-flex flex-column align-items-center justify-content-evenly mt-5  ' id='proyectos'>
        
        <h1 className='text-center ' >¡Mira mis proyectos!</h1>
    
    <article className='articleProyectos rounded-3 p-3 pt-4 my-5  '>
        
        {infoCard.map(({titulo,imagen,descripcion, linkGithub, linkDemo})=>(
          <Card key={imagen} img={imagen} title={titulo} descripcion={descripcion} linkDemo={linkDemo} linkGithub={linkGithub}/>
        ))}

    </article>
    </section>
  )
}
