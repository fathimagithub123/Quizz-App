import { QuizQ } from './constant'

import './App.css'
import Quiz from './Components/Quiz'

function App() {

  return (
    <>
     <Quiz questions={QuizQ.questions} />
    </>
  )
}

export default App
