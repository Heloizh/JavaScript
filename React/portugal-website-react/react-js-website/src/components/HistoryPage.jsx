import React  from 'react'



export default function HistoryPage({ onButtonClick }) {

  return (
    <div className='historyPage'>
        
        <img src='src/assets/historypage/praca_lviz.png' alt='praça lviz'></img>
        <div className='introPageHistory'>
            <h1>History</h1> 
            <p>The history of Portugal is a captivating story that spans centuries, from its early beginnings as a small county to becoming one of the most influential nations during the Age of Exploration. Portugal played a crucial role in shaping global history, especially through its maritime discoveries and vast empire. This brief overview highlights key moments in the formation of the Portuguese kingdom, its pioneering explorations, and its Golden Age in the 15th and 16th centuries, which left a lasting impact on the world.</p>
            <button className='more' onClick={onButtonClick}>MORE</button>
        </div>
    </div>
  )
}
