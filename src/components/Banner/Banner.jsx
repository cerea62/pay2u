import React from "react";
import './Banner';
import PlannedCosts from "../PlannedCosts/PlannedCosts";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 2
    }
};

const banners = [
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
    }
]
export default function Banner() {

    return (
        <>
            <section className="banner">
                <Carousel responsive={responsive}
                    swipeable={true} >
                    {banners.map(banner => (
                        <div key={banner.id} className="banner__card">
                        </div>
                    ))}
                </Carousel>

                <PlannedCosts />
            </section>
        </>

    )
}