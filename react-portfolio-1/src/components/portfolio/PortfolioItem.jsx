import React from 'react'

const PortfolioItem = ({image, title, github, demo}) => {
  return (
    <article className='portfolio_item'>
        <div className="portfolio_item-image">
            <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <div className="portfolio_item-cta">
            <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
        </div>
    </article>
  )
}

export default PortfolioItem
