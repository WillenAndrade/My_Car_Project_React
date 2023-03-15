import React from 'react'
import '../components/Cards.css'
import FlexCard from '../components/FlexCard'
import '../components/FlexCard.css'

import Car1 from '../imgs/car1.avif'
import Car2 from '../imgs/car2.avif'
import Car3 from '../imgs/car3.webp'
import Car4 from '../imgs/car4.avif'

const Porche = {
  nome: "BMW",
  id: 1,
  info: "O Porche é um carro magnifico",
  potence: "408hp - 761hp"
}

const BMW = {
  nome: "BMW",
  id: 2,
  info: "O BMW é um carro magnifico",
  potence: "408hp - 761hp"
}

const Mustang = {
  nome: "BMW",
  id: 3,
  info: "O Mustang é um carro magnifico",
  potence: "408hp - 761hp"
}

const Sport = {
  nome: "BMW",
  id: 3,
  info: "O Sport é um carro magnifico",
  potence: "408hp - 761hp"
}





const Cards = () => {

    return (
    <div className="cards">
      <FlexCard potence={Porche.potence}description={Porche.info}title="Porche" className="flexcard" src={Car1}/>
      <FlexCard potence={BMW.potence}description={BMW.info} title="BMW" className="flexcard" src={Car2}/>
      <FlexCard potence={Mustang.potence} description={Mustang.info} title="Mustang" className="flexcard" src={Car3}/>
      <FlexCard potence={Sport.potence} description={Sport.info} title="Sport" className="flexcard" src={Car4}/>
      <FlexCard potence={Porche.potence}description={Porche.info}title="Porche" className="flexcard" src={Car1}/>
      <FlexCard potence={BMW.potence}description={BMW.info} title="BMW" className="flexcard" src={Car2}/>
      <FlexCard potence={Mustang.potence} description={Mustang.info} title="Mustang" className="flexcard" src={Car3}/>
      <FlexCard potence={Sport.potence} description={Sport.info} title="Sport" className="flexcard" src={Car4}/>
      <FlexCard potence={Porche.potence}description={Porche.info}title="Porche" className="flexcard" src={Car1}/>
      <FlexCard potence={BMW.potence}description={BMW.info} title="BMW" className="flexcard" src={Car2}/>
      <FlexCard potence={Mustang.potence} description={Mustang.info} title="Mustang" className="flexcard" src={Car3}/>
      <FlexCard potence={Sport.potence} description={Sport.info} title="Sport" className="flexcard" src={Car4}/>
      
      
    </div> 
    )
}

export default Cards