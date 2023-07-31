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
          <p>Soy Juan Panizzi, un desarrollador front-end de la Patagonia Argentina con ganas de incorporarse a un equipo de trabajo.
            Tengo 27 años y me gusta investigar y aprender tecnologías nuevas que me permitan mejorar en el desarrollo web!
            ¡Una de mis metas es poder ser full-stack algún día!
            ¡En mi tiempo libre me gusta relacionarme con gente y explorar lugares nuevos!
          </p>
          <a href="#tit-contactame" className='btn btn-contactame'>
            ¡Contáctame!
          </a>
        </div>

      </div>
    </div>
  )
}
