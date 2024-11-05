import React from 'react'
import '../styles/Body.css'
import Square from './Square'

export default function Body() {
  return (
    <>
    <div className="body-container">
      <Square color="red" size="small" />
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </div>
    
    </>
  )
}
