import React from 'react'
import { about } from '../Data/dummydata'
import Heading from '../Common/Heading'
import image from '../img/man.png'

const About = () => {
  return (
    <>
    <section className='about'>
        <div className='container flex'>
            {about.map((val, i) => (
                <>
                <div className='left'>
                    <img src={image} alt='' data-aos="fade-down-right"></img>
                </div>
                <div className='right' data-aos="fade-down-left">
                    <Heading title='About Me' />
                    <p>{val.desc}</p>
                    <p>{val.desc1}</p>
                    <button>Download CV</button>
                    <button className='primaryBtn'>Download CV</button>
                </div>
                </>
            ))}
        </div>
    </section>
    </>
  )
}

export default About