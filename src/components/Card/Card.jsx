import React from 'react'
import './Card.css'

export default function Card({
  question,
  answer,
  color,
  radius,
  showAnswer,
  button,
}) {
  return (
    <section
      style={{ backgroundColor: color, borderRadius: radius }}
      className="Card"
    >
      <h2>{question}</h2>
      <img
        className="Card__img"
        src="https://source.unsplash.com/random/100x100"
      />
      <div className="Card__button--box">
        <button className="Card__button">{button}</button>
        {showAnswer && <p>{answer}</p>}
      </div>
    </section>
  )
}
