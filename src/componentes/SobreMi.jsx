import React from 'react'
import juan from '../recursos/Juan.jpeg'
import '../css/SobreMi.css'
export const SobreMi = () => {
  return (
    <div className='ctn-sobreMi mx-auto mt-6  ' id='sobreMi'>

      <h1 className='mt-5 tit-conoceme'>¡Conóceme!</h1>
      <div className='containerSobreMi my-5   rounded-3 '>
        <div className='ctn-imgJuan'>
          <img src={juan} alt="juan" className=' imgJuan' />
        </div>
        <div className='ctn-InfoSobreMi '>
          <h1>¿Quién soy?</h1>
          <p>Soy Juan Panizzi, un desarrollador Full Stack de la Patagonia Argentina con ganas de incorporarse a un equipo de trabajo.
            Tengo experiencia en múltiples trabajos en los que se destacaban el trabajo en equipo y la diversidad de las tareas, 
            por lo cual he desarrollado una buena adaptabilidad y facilidad para integrarme a equipos nuevos.
            Tengo 27 años y siempre me encuentro aprendiendo e investigando tecnologías nuevas para mejorar en mi profesión.
          </p>
          <a href="#tit-contactame" className='btn btn-contactame'>
            ¡Contáctame!
          </a>
        </div>

      </div>
    </div>
  )
}
