import React from 'react'
import '../components/Cards.css'
import FlexCard from '../components/FlexCard'

import Car1 from '../imgs/car1.avif'
import Car2 from '../imgs/car2.avif'
import Car3 from '../imgs/car3.webp'
import Car4 from '../imgs/car4.avif'

const cars = [{
  title: "Porche",
  id: 1,
  info: "A versão turbo da série 997 é equipada com o mesmo motor 3.6 L biturbo usado no 996 Turbo, só que agora ele desenvolve 480 PS e 620 N•m  de torque.",
  potence: "718hp - 978hp",
  src: Car1
},{
  title: "BMW",
  id: 2,
  info: "Motor 2.0 turbo com 380 cv a 5.000 rpm e 30,6kgfm câmbio 6 marchas",
  potence: "380hp - 566hp",
  src: Car2
},{
  title: "Mustang",
  id: 3,
  info: "Motor V8 de 483 cavalos de potência, câmbio automático de 10 marchas e tração traseira. ",
  potence: "483hp - 612hp",
  src: Car3
}, {
  title: "Sport",
  id: 4,
  info: "O tipo de tração e a disposição do motor influenciam significativamente as características de controle de um automóvel, e são de importância crucial no projeto de um carro esportivo.",
  potence: "408hp - 761hp",
  src: Car4
}]



 



const Cards = () => {

    return (
    <div className="cards">
      <h2 className='cars-title'>Carros esportivos</h2>
        <div className="cars">
        {cars.length > 0 && cars.map((car)=> <FlexCard key={car.id} car={car}/>)}
        {cars.length > 0 && cars.map((car)=> <FlexCard key={car.id} car={car}/>)}
        {cars.length > 0 && cars.map((car)=> <FlexCard key={car.id} car={car}/>)}
        {cars.length > 0 && cars.map((car)=> <FlexCard key={car.id} car={car}/>)}
        
      </div>
    </div>
    
    )
}

export default Cards