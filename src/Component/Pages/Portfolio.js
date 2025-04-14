import React, { useState } from 'react'
import { portfolio } from '../Data/dummydata'
import { Visibility } from '@mui/icons-material'
import Headinng from '../Common/Heading'

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
function Portfolio() {

    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)
    console.log(setCategory)

    const filterItem = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setList(newItems)

        if (category === "all") {
            setList(portfolio)
        }
    }

  return (
    <>
    <article>
        <div className='container'>
            <Headinng title="Portfolio" />
            <div className='catButton'>
                {category.map((category) => (
                    <button className='primaryBtn' data-aos="zoom-out-down" onClick={ () => filterItem(category)}>{category}</button>
                ))}
            </div>
        <div className='content grid3'>
            {list.map((items, i) => (
                <div className='box' data-aos="fade-up">
                    <div className='img'>
                        <img src={items.cover} alt=''/>
                    </div>
                    <div className='overlay'>
                        <h3>{items.title}</h3>
                        <h3>{items.name}</h3>
                        <Visibility />
                    </div>
                </div>
            ))}
        </div>     
        </div>
    </article>
    </>
  )
}

export default Portfolio