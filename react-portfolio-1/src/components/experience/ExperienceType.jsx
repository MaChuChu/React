import React from 'react'
import ExperienceContent from './ExperienceContent'


const ExperienceType = ({className, title, data}) => {

  return (
    <div className={className}>
        <h3>{title}</h3>
        <ExperienceContent data={data}/>
    </div>
  )
}

export default ExperienceType
