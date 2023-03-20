import {useState} from 'react'
import Newinfo from './Events/NewInfo'
import '../components/FlexCard.css'
const FlexCard = ({src, title, description, potence}) => {
   // const [carInfo, setCarInfo] = useState(false)

    return(
        <div className="flexcard">
                <img src={src}></img>
                <h2>{title}</h2>
                <div className="flex-over">
                {/*<p>{description}{carInfo ? <Newinfo /> : <span className={`${constToggleActive}`} onClick={(e) => setCarInfo(true)}>{potence}</span>}</p>*/}
                <p>{description}<span>{potence}</span></p>
                    </div>      
       </div>

       
    )
}

export default FlexCard