import React from 'react'

import ServiceListItem from './ServiceListItem';

const ServiceList = ({data}) => {
    function createListItems () {
        let temp = [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            temp.push(<ServiceListItem key={index} data={element}/>);
        }
        return temp;
    }
  return (
    <ul className='service_list'>
        {createListItems()}
    </ul>
  )
}

export default ServiceList
