import React from 'react'
import './Button.css'

export default function Button({ buttontext }) {
  return (
    <div className="ButtonBox">
      <button className="Button">{buttontext}</button>
    </div>
  )
}
