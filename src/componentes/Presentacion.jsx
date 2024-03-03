import React from 'react'
import dev from './dev.svg'
import ln from '../recursos/LinkediBlack.png'
import github from '../recursos/Github.png'
import '../css/Presentacion.css'

export const Presentacion = () => {
  return (



    <section className='sectionPresentacion  d-flex justify-content-center align-items-center'>

      <article className='articlePresentacion row justify-content-center align-items-center rounded-3 p-3 py-5'>
      <div className=' col-sm-6 soyJuan'>
        <h1 >Juan Panizzi</h1>
        <h2>Desarrollador Full Stack</h2>
        
        <div className='containerCv'>
          <a href='https://drive.google.com/file/d/1Hc9fT4A8y8XLxc9_WxXe4c5bcbLyB58D/view?usp=sharing' className='a-btn btn' download target='blank'>Descargar CV</a>
        
          <a href="https://www.linkedin.com/in/juan-panizzi-768522105/" target='blank'>
          <img src={ln} alt="linkedin" className='logoPresentacion m-3'/>
          </a>
          <a href="https://github.com/JuanPanizzi" target="blank"> 
          <img src={github} alt="github" className='logoPresentacion'/>
          </a>
        </div>
        </div>

      <div className='containerImgDev col-sm-5 col-lg-4 '>
          <img src={dev} alt="dev" className='imgDev'/>
      </div>
          {/* <img src="./gato.svg" alt="imagen" style={{ background: 'green'}}/> */}
    </article>
    </section>

    
  )
}
