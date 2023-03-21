import React from 'react'

import { BsPatchCheckFill } from 'react-icons/bs'

const ExperienceDetail = ({language, type}) => {
    return (
        <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
                <h4>{language}</h4>
                <small className='text-light'>{type}</small>
            </div>
        </article>
    )
}

export default ExperienceDetail
