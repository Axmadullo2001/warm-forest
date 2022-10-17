import {VscStarFull} from "react-icons/vsc"
import { config } from "../../mocks/cards";

import "./CardItem.css";


const CardItem = ({img, name, price, reviews}) => {



    return (
        <div className='card-item'>
            <div className='card-item__img-block'>
                <img className='card-item__img' src={ img } alt={ name } />
            </div>

            <div className='card-item__body'>
                <p className='card-item__name'><a  className='card-item__name-link' href="/">{ name }</a></p>
                <div className='card-item__reviews'>
                    {config.map(star => (
                        <span><VscStarFull color='#f0c040' size={'14px'}/></span>
                    ))}
                    <span className='card-item__reviews'>{ reviews } reviews</span>
                </div>
                <span className='card-item__price'>${ price }</span>

            </div>
        </div>
    )
}

export default CardItem


