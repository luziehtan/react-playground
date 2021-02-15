import React from 'react'
import AppHeader from './components/AppHeader'
import Card from './components/Card'
import Button from './components/Button'

document.querySelector('#root')

export default function App() {
  return (
    <>
      <AppHeader title="React Intro" />
      <Card
        color="pink"
        radius="20px"
        question="What does React do?"
        answer="It helps you create components!"
        showAnswer
        button="Show Answer"
      />
      <Card
        radius="45px"
        question="What is JSX?"
        answer="It is pseudo HTML to create elements in JS."
        button="Show Answer"
      />
      <Card
        color="purple"
        question="Can I create my own HTML-Elements?"
        answer="Kind of."
        showAnswer
        button="Show Answer"
      />
      <Button buttontext="Click me!" />
    </>
  )
}
