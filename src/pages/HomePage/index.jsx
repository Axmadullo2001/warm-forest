import React from 'react'
import CardItem from "../../components/CardItem"

import { goods } from '../../mocks'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import s from "./styles.module.scss";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={s.cardlist_container}>
                {goods.map((good) => (
                    <CardItem key={ good.id } { ...good } />
                    ))}
            </div>
            <Footer />
        </>
    )
}

export default HomePage
