import React from 'react';
import './ServicesCardList.css'
import ServicesCard from '../ServicesCard/ServicesCard';

function ServicesCardList(cards) {
    console.log(cards);
    return (
        <ul className='services-cards'>
               {cards.cards.map(item => 
               <ServicesCard key={item.id} {...item} />)}
        </ul>
    );
}

export default ServicesCardList;