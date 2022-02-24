import React from 'react'
import Card from './Card';
// import robot from './Data'

export default function Cardlist({robot}) {

    const cardComponent = robot.map((robots, index)=>{
       
        return < Card id = {robot[index].id} Name = {robot[index].Name} Email = {robot[index].Email}/>
    });

  return (
    <div>
         {cardComponent}
    </div>
  )
}
