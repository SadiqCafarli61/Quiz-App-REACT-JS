import { useState, useReducer, useContext } from 'react'
import './App.css'
import Mainmenu from './Components/Mainmenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'
import { QuizContext } from "./Helpers/Context"


function App() {
  const [gameState, setGameState]= useState('menu')
  const [score, setScore]= useState(0)

 

// 
  // const onChange = e => {
  //   dispatch({
  //     type: "SET_TODO",
  //     value: e.target.value
  //   })
  // }

  return (
    <>

 
  

   
    <h2>Quiz App</h2>
    <QuizContext.Provider value={{gameState,  setGameState, score, setScore}}>
    {gameState === "menu" && <Mainmenu />}
    {gameState === "quiz" && <Quiz />}
    {gameState === "endScreen" && <EndScreen />}
    </QuizContext.Provider>
   
    </>
  )
}

export default App
