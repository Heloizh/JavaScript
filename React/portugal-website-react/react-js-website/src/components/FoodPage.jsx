import React from 'react'

export default function FoodPage({ onButtonClick }) {
  return (
    <div className='foodPage' id='food'>
      <ul>
        <li>
          <img onClick={onButtonClick} src='src/assets/foodpage/pasteldenata.png' alt='pastel de nata'/>
          <img onClick={onButtonClick} src='src/assets/foodpage/francesinha.png' alt='francesinha'/>
          <img onClick={onButtonClick} src='src/assets/foodpage/bacalhauabras.png' alt='bacalhau a brás'/>
        </li>
        <li>
          <img onClick={onButtonClick} src='src/assets/foodpage/arrozdepato.png' alt='arroz de pato'/>
          <img onClick={onButtonClick} src='src/assets/foodpage/toucinhodoceu.png' alt='toucinho do céu'/>
          <img onClick={onButtonClick} src='src/assets/foodpage/alheira.png' alt='alheira'/>
        </li>
        <li>
           <img onClick={onButtonClick}  src='src/assets/foodpage/jesuita.png' alt='jesuita'/>
           <img onClick={onButtonClick}  src='src/assets/foodpage/boladeberlim.png' alt='bola de berlim'/>
           <img onClick={onButtonClick}  src='src/assets/foodpage/sardinhaassada.png' alt='sardinha assada'/>
        </li>
      </ul>
      <div className='infoFoodPage'>
        <h1>FOODS</h1>
        <p>Portuguese cuisine is rich in flavor, tradition, and diversity. Influenced by the sea, codfish is a star of the cuisine, featured in hundreds of recipes like the famous Bacalhau à Brás. Seafood dishes, such as grilled sardines and octopus "à lagareiro," are also widely enjoyed. In the rural interior, hearty dishes like cozido à portuguesa and roasted lamb reflect the country's agricultural roots. Besides savory dishes, Portugal is renowned for its conventual sweets, like pastéis de nata and toucinho do céu, which delight palates with their unique textures and flavors.</p>
      </div>
    </div>
  )
}
