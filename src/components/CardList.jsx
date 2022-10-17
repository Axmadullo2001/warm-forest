import React from 'react'

import CardItem from "./CardItem"

import img_1 from "../assets/1.jpg"
import img_2 from "../assets/2.jpg"
import img_3 from "../assets/3.jpg"
import img_4 from "../assets/4.jpg"
import img_5 from "../assets/5.jpg"
import img_6 from "../assets/6.jpg"


import "../styles/CardList.css";


const CardList = () => {
    const goods = [
        {name: "Nike Slim Shirt", price: 120, reviews: 0, img: img_1},
        {name: "Puma Slim Pant", price: 65, reviews: 0, img: img_2},
        {name: "Lacoste Free Shirt", price: 220, reviews: 0, img: img_3},
        {name: "Adidas Fit Shirt", price: 100, reviews: 0, img: img_4},
        {name: "Adidas Fit Pant", price: 139, reviews: 0, img: img_5},
        {name: "Nike Slim Shirt", price: 78, reviews: 0, img: img_6},
    ]


    return (
        <div className="cardlist-container">
            {goods.map((good, index) => (
                <CardItem key={ index } { ...good } />
            ))}
        </div>
    )
}

export default CardList



