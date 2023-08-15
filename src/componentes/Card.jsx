import React from 'react'
import btn from '../recursos/btn-play.png'
import github from '../recursos/Github.png'

export const Card = (props) => {

    const {title, img, descripcion, linkDemo, linkGithub} = props;
    return (
        <div className="card">
            <div className='ctn-imagen'>
            <img src={img} className="" alt="..." />
            </div>
            <div className="text-center">
                <h2 className=' mx-0 mb-1 py-1 '>{title}</h2>
                <p className='px-2' >{descripcion}</p>
                <div className='d-flex justify-content-evenly '>
                    <a href={linkDemo} target='blank' className='me-2 '>Ver proyecto 
                    <img src={btn} alt="btn-play" className='demo ms-2'/></a>
                <a href={linkGithub} target='blank'>
                    <img src={github} alt="" className='me-2' />
                    Github </a>
                </div>
            </div>
        </div>
    )
}
