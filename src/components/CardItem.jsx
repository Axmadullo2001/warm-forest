import {VscStarFull} from "react-icons/vsc"

import "../styles/CardItem.css";


const CardItem = (props) => {


    return (
        <div className='card-item'>
            <div className='card-item__img-block'>
                <img className='card-item__img' src={ props.img } alt={ props.name } />
            </div>

            <div className='card-item__body'>
                <p className='card-item__name'><a  className='card-item__name-link' href="/">{ props.name }</a></p>
                <div className='card-item__reviews'>
                    <span><VscStarFull color='#f0c040' size={'14px'}/></span>
                    <span><VscStarFull color='#f0c040' size={'14px'}/></span>
                    <span><VscStarFull color='#f0c040' size={'14px'}/></span>
                    <span><VscStarFull color='#f0c040' size={'14px'}/></span>
                    <span className='card-item__reviews'>{ props.reviews } reviews</span>
                </div>
                <span className='card-item__price'>${ props.price }</span>

            </div>
        </div>
    )
}

export default CardItem

