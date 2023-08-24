import React, {useState, useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import {Questions} from '../Helpers/QuestionsBank'

const Quiz = () => {
 const { score, setScore, setGameState} = useContext(QuizContext)
  const [currQuestion, setCurrQuestion]= useState(0)
  const [optionChose, setOptionChose]= useState("")


  const nextQuestion = () => {
   if(Questions[currQuestion].answer == optionChose){
    setScore(score + 1)
   }
  
 setCurrQuestion(currQuestion + 1)
  }
  const finishQuiz = () => {
    if(Questions[currQuestion].answer == optionChose){
      setScore(score + 1)
    }
    setGameState("endScreen")
   
  }
  return (
    <div className='quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChose("A")}>{Questions[currQuestion].optionA}{""}</button>
        <button onClick={() => setOptionChose("B")}>{Questions[currQuestion].optionB}{""}</button>
        <button onClick={() => setOptionChose("C")}>{Questions[currQuestion].optionC}{""}</button>
        <button onClick={() => setOptionChose("D")}>{Questions[currQuestion].optionD}{""}</button>
      </div>
      {currQuestion == Questions.length - 1 ? (
        <button className='finish' onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next Question</button>
        
      )} 
    
    </div>
  )
}

export default Quiz