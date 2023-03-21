import React from 'react';
import './experience.css';

import ExperienceType from './ExperienceType';

const Experience = () => {

  const frontendData = {
   languages : ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'React'],
   type: ['Experienced', 'Intermediate', 'Experienced', 'Experienced', 'Experienced', 'Experienced',] 
  }

  const backendData = {
   languages : ['Node JS', 'MongoDB', 'MySQL', 'Python', 'Java', 'C++'],
   type: ['Intermediate', 'Experienced', 'Basic', 'Basic', 'Intermediate', 'Intermediate', 'Intermediate'] 
  }

  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <ExperienceType 
          className="experience_frontend" 
          title="Frontend Development"
          data={frontendData}
        />
        <ExperienceType 
          className="experience_backend"
          title="Backend Development"
          data={backendData}
        />
      </div>
    </section>
  )
}

export default Experience
