import React from 'react';
import './services.css';

import ServiceHead from './ServiceHead';
import ServiceData from './ServiceData';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <ServiceHead title="UI/UX Design" data={ServiceData.data1}/>
        <ServiceHead title="Web Development" data={ServiceData.data2}/>
        <ServiceHead title="Content Creation" data={ServiceData.data3}/>
      </div>
    </section>
  )
}

export default Services
