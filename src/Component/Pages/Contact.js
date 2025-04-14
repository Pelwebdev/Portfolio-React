import React from 'react'
import Heading from '../Common/Heading'
import { contact } from '../Data/dummydata'

function Contact() {
  return (
    <>
      <section className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos="zoom-in-down" />
                  <input type='email' placeholder='Email' data-aos="zoom-in-up" />
                </div>
                <input type='text' placeholder='Submit' data-aos="zoom-in-up" />
                <textarea name='' cols='30' rows='10' data-aos="zoom-in-down" ></textarea>
                <button data-aos="zoom-in-down">Submit</button>
              </form>
            </div>
            <div className='left'>
              {
                contact.map((item) => (
                  <div className='box' data-aos="zoom-in-down">
                    <i>{item.icon}</i>
                    <p>{item.text1}</p>
                    <p>{item.text2}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact