import React, {useState} from 'react'

export default function DynamicHistoryPage({ onClose }) {
  return (
    <div className='dynamicContainer'>
        <div>
            <button onClick={onClose}><i class='bx bx-x'></i></button>
        </div>
    </div>
  )
}
