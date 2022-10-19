import { Link } from "react-router-dom";

import { config } from "../../mocks";

import card_element from "./CardItem.module.scss";

const CardItem = (props) => {
    const { img, name, price, reviews } = props

    return (
        <div className={card_element.card_item}>
            <div className={card_element.card_item__img_block}>
                <img className={card_element.card_item__img} src={ img } alt={ name } />
            </div>

            <div className={card_element.card_item__body}>
                <p className={card_element.card_item__name}><Link  className={card_element.card_item__name_link} to="/">{ name }</Link></p>
                <div className={card_element.card_item__reviews}>
                    {config.map(star => (
                        <img className={card_element.card_item__star} key={ star.id } src={ star.src } alt={''} />
                    ))}

                    <span className={card_element.card_item__reviews}>{ reviews } reviews</span>
                </div>
                <p className={card_element.card_item__price}>${ price }</p>

            </div>
        </div>
    )
}

export default CardItem
