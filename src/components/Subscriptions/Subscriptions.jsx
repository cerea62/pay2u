import React from "react";
import './Subscriptions.css'
import ButtonNavigation from "../ButtonNavigation/ButtonNavigation";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 2
    }
};

const subscriptions = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },

]

export default function Subscriptions() {

    return (
        <>
            <section className="subscriptions">
                <div className="subscription__nav">
                    <h2 className="subscriptions__title">Мои подписки</h2>
                    <ButtonNavigation />
                </div>
                <Carousel responsive={responsive}
                    swipeable={true}>
                    {subscriptions.map(item => (
                        <div key={item.id} className="subscriptions__card">
                        </div>
                    ))}
                </Carousel>
            </section>
        </>
    )
}