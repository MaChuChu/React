import React from 'react'

import ServiceList from './ServiceList'

const ServiceHead = ({title, data}) => {
  return (
    <article className='service'>
    <div className="service_head">
        <h3>{title}</h3>
    </div>
    <ServiceList data={data}/>
    </article>
  )
}

export default ServiceHead
