import React from 'react'
import phone from '../recursos/phone.png'
import '../css/Contacto.css'

export const Contacto = () => {
    return (
            <>
            <h1 className=' text-center' id='tit-contactame'>¡Contactame!</h1>
            <div className='ctn-contacto mx-auto  d-flex justify-content-around align-items-center  p-3 rounded-3'>
                <div className='text-center mb-2'>
                    <img src={phone} alt="phone" className='imgPhone'  />
                </div>
                <div className='ctn-form'>
                    <form action="https://formspree.io/f/xrgvvwlz" method="POST" name='formulario' >
                        <div>
                            <input type="text" id='nombre' className='w-100  p-2 ' placeholder='Nombre' />
                        </div>
                        <div>
                            <input type="email" name='email' id='email' className='w-100 p-2 my-1' placeholder='Email' />
                        </div>
                        <div>
                            <textarea name="message" id="mensaje" cols="40" rows="6" className='w-100 p-2 ' placeholder='Mensaje'></textarea>
                            <button type='submit' className='btn w-100 btn-enviar' >¡Enviar!</button>
                        </div>
                    </form>
                </div>
            </div>
            </>
        
    )
}
