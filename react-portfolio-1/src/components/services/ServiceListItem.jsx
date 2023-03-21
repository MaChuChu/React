import React from 'react'

import { BiCheck } from 'react-icons/bi';

const ServiceListItem = ({data}) => {
  return (
    <li>
        <BiCheck className='service_list-icon'/>
        <p>{data}</p>
    </li>
  )
}

export default ServiceListItem
