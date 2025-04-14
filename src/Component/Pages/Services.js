import React from 'react'
import Heading from '../Common/Heading'
import { services } from '../Data/dummydata'

function Services() {
  return (
    <>
    <section className='services'>
        <div className='container'>
            <Heading title='Services' />
            <div className='ccontent grid3'>
            {services.map((item, i) => (
                <div className='box' data-aos="flip-left">
                    <i>{item.icon}</i>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Services