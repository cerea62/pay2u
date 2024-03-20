import React from 'react';
import { useState } from 'react';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import './Services'
import ServicesCardList from '../ServicesCardList/ServicesCardList';

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
const [buttonEnable,]
function handleClick() {

}
function Services() {
    return (
        <>
            <section className="services">
                <div className="services__nav">
                    <h2 className="services__title">Сервисы</h2>
                    <ButtonNavigation />
                </div>
                < div className='services__toolbar'>
                    <button className='services__button' onClick={handleClick}>Все</button>
                    <button className='services__button'>Категории</button>
                </div>
                <ServicesCardList
                cards={servicesCards} />
            </section>
        </>
    );
}

export default Services;