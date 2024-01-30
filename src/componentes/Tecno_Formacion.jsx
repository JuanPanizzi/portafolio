import React from 'react'
import '../css/Tecno_Formacion.css'
import html5 from '../recursos/Tecnologias/ht.png'
import css from '../recursos/Tecnologias/css.png'
import javascript from '../recursos/Tecnologias/js.png'
import less from '../recursos/Tecnologias/less.png'
import sass from '../recursos/Tecnologias/sass.png'
import bootstrap from '../recursos/Tecnologias/bootstrap.png'
import react from '../recursos/Tecnologias/react.png'
import edIT from '../recursos/EdIT.jpg'
import mongo from '../recursos/Tecnologias/mongo.svg'
import nest from '../recursos/Tecnologias/Nestjs.png'
import git from '../recursos/Tecnologias/Git.png'
import node from '../recursos/Tecnologias/Node.png'
import ts from '../recursos/Tecnologias/typescript.svg'

export const Tecno_Formacion = () => {
  return (

    <div className='tecno-formacion mx-auto rounded-3  'id='skills'>



      <div  className='ctn-InfoTecnologias mt-5 text-center p-2 py-4  w-100 rounded-3'>

        <h1>Tecnologías</h1>
        <p>¡Estas son las tecnologías que aprendí en los cursos que realicé!</p>

        <div className='w-100 container-tecnologias'>

        <div>
        <img src={nest} alt="Nest" />
        <p>Nest JS</p>
      </div>
        <div>
            <img src={mongo} alt="MongoDB" />
            <p>Mongo DB</p>
          </div>
          <div>
            <img src={node} alt="NodeJS" />
            <p>Node JS</p>
          </div>
          <div>
            <img src={react} alt="react" />
            <p>React JS</p>
          </div>
          <div>
            <img src={ts} alt="Typescript" />
            <p>Typescript</p>
          </div>
          <div>
            <img src={git} alt="git" />
            <p>GIT</p>
          </div>
          <div>
            <img src={bootstrap} alt="bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div>
            <img src={sass} alt="sass" />
            Sass
          </div>
          <div>
            <img src={less} alt="less" />
            Less
          </div>
          <div>
            <img src={javascript} alt="javascript" />
            JavaScript
          </div>
          <div>
            <img src={css} alt="css" />
            Css
          </div>
          <div>
            <img src={html5} alt="html" />
            Html
          </div>

        </div>
      </div>

      <div  className='ctn-InfoFormacion w-100 h-auto text-center  p-2 my-4 rounded-3'>
        <h1>Formación</h1>
        <p>Realicé mis estudios en el Instituto de <a href="https://www.educacionit.com/carrera-front-end-web-developer" target='blank'>Educación IT</a>  </p>
        <p>Al día de hoy sigo estudiando en el mismo Instituto e investigando de manera auto-didacta</p>

        <p>
          <button className="btn-verCertificaciones btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Ver certificaciones
          </button>
        </p>

        <div className=" bg-dark collapse  rounded-3 " id="collapseExample">

          <div className=" text-dark rounded-3 bg-light container-certificaciones p-1">

            <div className='d-flex flex-column align-items-center   '>
              <img src={edIT} alt="React.JS" className='rounded-2  d-block' />
              <a href="https://api.educacionit.com/pdf/certificados/juan-panizzi-691417/62321  " target='blank'   >React.JS</a>
            </div>
            <div className=' d-flex flex-column align-items-center  '>
              <img src={edIT} alt="React.JS" className='rounded-2  d-block' />
              <a href="https://api.educacionit.com/pdf/certificados/juan-panizzi-691417/56767 " target='blank'  >Maquetador Avanzado Sass y Less</a>
            </div>
            <div className='d-flex flex-column align-items-center  '>
              <img src={edIT} alt="React.JS" className='rounded-2  d-block ' />
              <a href="https://api.educacionit.com/pdf/certificados/juan-panizzi-691417/59503 " target='blank'  >Responsive Web Design</a>
            </div>
            <div className='d-flex flex-column align-items-center  '>
              <img src={edIT} alt="React.JS" className='rounded-2  d-block' />
              <a href="https://api.educacionit.com/pdf/certificados/Juan-Panizzi-691417/58150 " target='blank'  >JavaScript</a>
            </div>

            <div className='d-flex flex-column align-items-center  '>
              <img src={edIT} alt="React.JS" className='rounded-2  d-block' />
              <a href="https://api.alumni.education/course/certificate/generate?hash=2890a415-e499-4d79-9382-d3d68e74ce46&format=pdf " target='blank'  >Maquetación Web: HTML5 y CSS</a>
            </div>

            <div className='d-flex flex-column align-items-center  '>
              <img src={edIT} alt="React.JS" className='rounded-2  d-block' />
              <a href="https://api.educacionit.com/pdf/certificados/Juan-Panizzi-691417/58758 " target='blank' >Introducción a UX</a>
            </div>

            <div className='d-flex flex-column align-items-center   '>
              <img src={edIT} alt="React.JS" className='rounded-2  d-block' />
              <a href="https://api.alumni.education/course/certificate/generate?hash=ea37f46f-351b-4998-98af-f7cc8aa5ff85&format=pdf " target='blank'  >Introducción al Paradigma de Objetos</a>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}
