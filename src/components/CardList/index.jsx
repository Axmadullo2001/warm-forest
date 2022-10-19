import React from 'react'
import CardItem from "../CardItem"

import { goods } from '../../mocks/'
import Header from '../Header';
import Footer from '../Footer';

import card_list from "./CardList.module.scss";

const CardList = () => {
    return (
        <>
            <Header />
            <div className={card_list.cardlist_container}>
                {goods.map((good) => (
                    <CardItem key={ good.id } { ...good } />
                    ))}
            </div>
            <Footer />
        </>
    )
}

export default CardList
