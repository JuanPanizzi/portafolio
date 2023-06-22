import React from 'react'
import lnk from '../recursos/LinkediBlack.png'
import github from '../recursos/Github.png'
import mail from '../recursos/mail.png'
import wsp from '../recursos/Whatsapp.png'
import '../css/Footer.css'
export const Footer = () => {
    return (

        <div className='container-footer mt-5'>
            <footer className=' text-light rounded-top'>
                <div >
                    <a href="https://www.linkedin.com/in/juan-panizzi-768522105/" target='blank' >
                        <img src={lnk} alt="linkedin" />
                    Linkedin
                    </a>
                </div>
                <div>
                <a href="https://github.com/JuanPanizzi" target="blank"> 
                    <img src={github} alt="github" />
                    Github
                    </a>
                </div>
                <div >
                    <a className='d-inline ps-1' href='mailto:juanpanizzi@hotmail.com'>
                        <img src={mail} alt="Enviar email"  />
                        juanpanizzi@hotmail.com

                    </a>
                </div>
                <div >
                    <a href='https://wa.me/541123444429' target='blank'>
                    <img src={wsp} alt="mail" />
                        1123444429
                    </a>
                </div>

            </footer>
        </div>
    )
}
