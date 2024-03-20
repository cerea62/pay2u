import React from 'react';
import './ServicesCardList.css'
import ServicesCard from '../ServicesCard/ServicesCard';
const servicesCards = [
    {
        id: 1,
        image: 'https://avatars.mds.yandex.net/i?id=d63ee171e31bcf86adf3592984e5cd4f9912571c-10844270-images-thumbs&n=13',
        title: 'Яндекс Музыка',
        description: 'Персональный музыкальный мир, который воодушевляет'
    },
    {
        id: 2,
        image: 'https://avatars.mds.yandex.net/i?id=d63ee171e31bcf86adf3592984e5cd4f9912571c-10844270-images-thumbs&n=13',
        title: 'Яндекс Музыка',
        description: 'Персональный музыкальный мир, который воодушевляет'
    },
    {
        id: 3,
        image: 'https://avatars.mds.yandex.net/i?id=d63ee171e31bcf86adf3592984e5cd4f9912571c-10844270-images-thumbs&n=13',
        title: 'Яндекс Музыка',
        description: 'Персональный музыкальный мир, который воодушевляет'
    },
    {
        id: 4,
        image: 'https://avatars.mds.yandex.net/i?id=d63ee171e31bcf86adf3592984e5cd4f9912571c-10844270-images-thumbs&n=13',
        title: 'Яндекс Музыка',
        description: 'Персональный музыкальный мир, который воодушевляет'
    },
    {
        id: 5,
        image: 'https://avatars.mds.yandex.net/i?id=d63ee171e31bcf86adf3592984e5cd4f9912571c-10844270-images-thumbs&n=13',
        title: 'Яндекс Музыка',
        description: 'Персональный музыкальный мир, который воодушевляет'
    },
]

function ServicesCardList() {

    return (
        <ul className='services-cards'>
               {servicesCards.map(item => 
               <ServicesCard key={item.id} {...item} />)}
        </ul>
    );
}

export default ServicesCardList;