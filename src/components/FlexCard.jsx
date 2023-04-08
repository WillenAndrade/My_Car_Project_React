import {useState} from 'react'
import Newinfo from './Events/NewInfo'
import '../components/FlexCard.css'
const FlexCard = ({car}) => {
   
    return(
        <div className="flexcard">
            {<img src={car.src}></img>}
            <h2>{car.title}</h2>
            <div className="flex-over">
                <p>{car.info}<span>{car.potence}</span></p>
            </div>      
       </div>

       
    )
}

export default FlexCard