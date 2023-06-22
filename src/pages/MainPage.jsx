import React from 'react'
import { NavBar } from '../componentes/NavBar'
import { Presentacion} from '../componentes/Presentacion'
import {Proyectos} from '../componentes/Proyectos'
import {Tecno_Formacion} from '../componentes/Tecno_Formacion'
import {SobreMi} from '../componentes/SobreMi'
import {Footer} from '../componentes/Footer'
import { Contacto } from '../componentes/Contacto'

export const MainPage = () => {
  return (
    < >
    <NavBar/>    
    <Presentacion/>
    <Proyectos/>
    <Tecno_Formacion/>
    <SobreMi/>
    <Contacto/>
    <Footer/>
    </>
  )
}

