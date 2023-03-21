import React from 'react'

import Card from './Card';

const Cards = () => {
  return (
    <div className="about_cards">
        <Card icon="experience" title="Experience" text="Undergraduate"/>
        <Card icon="client" title="Clients" text="Don't Worry"/>
        <Card icon="test" title="Projects" text="Don't Worry"/>
    </div>
)
}

export default Cards
