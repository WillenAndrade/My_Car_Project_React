import React from 'react'
import '../components/Cards.css'
import FlexCard from '../components/FlexCard'

import Car1 from '../imgs/car1.avif'
import Car2 from '../imgs/car2.avif'
import Car3 from '../imgs/car3.webp'
import Car4 from '../imgs/car4.avif'

const Porche = {
  nome: "BMW",
  id: 1,
  info: "A versão turbo da série 997 é equipada com o mesmo motor 3.6 L biturbo usado no 996 Turbo, só que agora ele desenvolve 480 PS (353 kW) e 620 N•m (457 lbf•ft) de torque.",
  potence: "408hp - 761hp"
}

const BMW = {
  nome: "BMW",
  id: 2,
  info: "Motor 2.0 turbo com 380 cv a 5.000 rpm e 30,6kgfm câmbio 6 marchas",
  potence: "408hp - 761hp"
}

const Mustang = {
  nome: "BMW",
  id: 3,
  info: "Motor V8 de 483 cavalos de potência, câmbio automático de 10 marchas e tração traseira. ",
  potence: "408hp - 761hp"
}

const Sport = {
  nome: "BMW",
  id: 3,
  info: "O tipo de tração e a disposição do motor influenciam significativamente as características de controle de um automóvel, e são de importância crucial no projeto de um carro esportivo.",
  potence: "408hp - 761hp"
}

const Cards = () => {

    return (
    <div className="cards">
      <h2 className='cars-title'>Carros esportivos</h2>
        <div className="cars">
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
    </div>
    
    )
}

export default Cards