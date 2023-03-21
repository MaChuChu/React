import React from 'react'

import PortfolioItem from './PortfolioItem';

import data from './PortfolioData';

const PortfolioContainer = () => {
  return (
    <div className="container portfolio_container">
        {
            data.map(({id, image, title, github, demo}) => {
                return <PortfolioItem key={id} image={image} title={title} github={github} demo={demo}/>
            })
        }
    </div>
  )
}

export default PortfolioContainer
