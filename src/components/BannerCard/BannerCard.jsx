import React from "react";
import './BannerCard.css'

export default function BannerCard({banner}) {
    return (
        < >                              

                <p className="banner__text">{banner.text}</p>
                <img className="banner__image" src={banner.image} alt="#"/>
        </>
    )
}