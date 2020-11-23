import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
    {
        props.monsters.map(monster => ( 
        <Card key={monster.id} monster={monster} />
    ))}
    </div>
)

// Props any parameter passed to component
// Reusable + sepration of concerns
// Parent: State => Child:props