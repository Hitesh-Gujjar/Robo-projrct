import React from 'react'
import style from'./App.module.css'


export default function Card({id, Name, Email}) {
  return (
    <div className={style.card_background}>
        <img src={`https://robohash.org/${id}`} alt="Profile pic"/>
            <div>
                <h2>{Name}</h2>
                <p>{Email}</p>
            </div>
    </div>
  )
}
