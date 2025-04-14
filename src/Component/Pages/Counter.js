import React from 'react'
import { project } from '../Data/dummydata'
import Countup from 'react-countup'

function Counter() {
  return (
    <>
    <div className='hero counter'>
        <div className='container grid3 grid4'>
            {project.map((item, i) => (
                <div className='box' data-aos="zoom-in">
                    <i>{item.icon}</i>
                    <h1 className='heading'><Countup enableScrollSpy duration={2} end={item.num} /></h1>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Counter