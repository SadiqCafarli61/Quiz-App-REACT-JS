import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import {Questions} from '../Helpers/QuestionsBank'



const EndScreen = () => {
  const {score, setScore, setGameState} = useContext(QuizContext)
  const restartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }
  return (
    <div className='endscreen'>
      {""}
      <h1>Quiz finished</h1>
      {""}
      <h3> {score} / {Questions.length} {""}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen