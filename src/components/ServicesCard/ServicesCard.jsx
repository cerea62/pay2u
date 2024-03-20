import React from 'react';
import './ServicesCard.css';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';

function ServicesCard(props) {
    return (
        <>
        <li className='services-card'>
            <img className='services-card__image' alt='#' src={props.image} />
            <div className='services-card__content'>
                <h3 className='services-card__title'>{props.title}</h3>
                <p className='services-card__description'>{props.description}</p>
            </div>
            <ButtonNavigation />
        </li>
        </>

    );
}

export default ServicesCard;