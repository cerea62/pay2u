import React, { useState } from "react";
import './Main.css'
import Banner from "../Banner/Banner";
import Subscriptions from "../Subscriptions/Subscriptions";
import Services from "../Services/Services";


export default function Main() {
    const [isSigned, setIsSigned] = useState(false);

    return (
        <>
            <main className="main">
                <h1 className="main__title">Подписки</h1>
                <Banner />
                <Subscriptions isSigned={isSigned}/>
                <Services />
            </main>
        </>
    )
}