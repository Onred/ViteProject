import React, { useState } from 'react'
import '../styles/Body.css'
import Square from './Square'

export default function Body() {
  const [squareCount, setSquareCount] = useState(0);

  let possibleColors = ["red", "orange", "yellow", "green", "blue", "purple"];
  let possibleSizes = ["small", "medium", "large"];

  let squares = [];
  for(let i = squareCount; i > 0; i--) {
    let randomColor = possibleColors[Math.floor(Math.random() * possibleColors.length)]
    let randomSize = possibleSizes[Math.floor(Math.random() * possibleSizes.length)]

    squares.push(<Square key={i} color={randomColor} size={randomSize} />)
  }

  return (
    <>
    <div className="body-container">
      <button onClick={() => setSquareCount(squareCount - 1)}>-1</button>
      <button onClick={() => setSquareCount(Math.floor(Math.random() * 50) + 1)}>Randomize</button>
      <button onClick={() => setSquareCount(squareCount + 1)}>+1</button>
      {squares}
    </div>
    
    </>
  )
}
