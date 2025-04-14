import React from 'react'
import { social } from '../Data/dummydata'

function Footer() {
  return (
    <>
    <footer>
        {
            social.map((item) => (
                <>
                <i data-aos="zoom-in-left">{item.icon}</i>
                </>
            ))
        }
        <p data-aos="zoom-in-right">Copyright © 2025. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer