import React from 'react'

export default function CulturePage({ onButtonClick }) {
  return (
    <div className='culturePage' id='culture'>
        <h1>CULTURE</h1>
        <ul>
            <li><img src='src/assets/culturepage/porto_draw.png' alt='porto'/><h4>The City of Porto</h4><p>Porto, one of Europe’s oldest cities, is famous for its wine and unique architecture. With its narrow streets, steep hills, and colorful houses along the Douro River, the city blends tradition with modernity. Landmarks like the Clérigos Tower and the Dom Luís I Bridge are symbols of its vibrant history and cultural character.</p></li>
            <li><img src='src/assets/culturepage/city_draw.png' alt='city'/><h4>Ancient Cities of Portugal</h4><p>Many Portuguese cities, such as Lisbon, Évora, and Coimbra, are known for their ancient buildings, dating back centuries. Palaces, monasteries, and medieval castles blend with cobblestone streets and historic neighborhoods, creating an atmosphere that transports visitors to past eras, preserving the essence of a traditional and timeless Portugal.</p><button onClick={onButtonClick} className='more'>MORE</button></li>
            <li><img src='src/assets/culturepage/azulejo_draw.png' alt='azulejos'/><h4>Azulejos in Portugal</h4><p>Azulejos are an iconic part of Portuguese culture. These ceramic tiles, often decorated with geometric patterns or historical scenes, adorn the facades of churches, palaces, and homes. Introduced by the Moors in the 13th century, azulejos evolved into a national art form, reflecting the country's historical and artistic richness.</p></li>
        </ul>

    </div>
  )
}
