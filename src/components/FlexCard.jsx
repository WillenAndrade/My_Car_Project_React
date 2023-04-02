import {useState} from 'react'
import Newinfo from './Events/NewInfo'
import '../components/FlexCard.css'
const FlexCard = ({src, title, description, potence}) => {
   
    return(
        <div className="flexcard">
            <img src={src}></img>
            <h2>{title}</h2>
            <div className="flex-over">
                <p>{description}<span>{potence}</span></p>
            </div>      
       </div>

       
    )
}

export default FlexCard