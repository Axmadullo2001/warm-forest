import React from 'react'

import CardItem from "../CardItem"

import { goods } from '../../mocks/cards'


import "./CardList.css";


const CardList = () => {

    return (
        <div className="cardlist-container">
            {goods.map((good) => (
                <CardItem key={ good.id } { ...good } />
            ))}
        </div>
    )
}

export default CardList



