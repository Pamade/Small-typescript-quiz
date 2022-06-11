import React, { useState } from 'react'
import {PropsSet} from '../model'

function Questions({questions, setQuestions}:PropsSet) {
  
  const [confirmed, setConfirmed] = useState(false)

  const handleChoice = (id:number, answerId:number) => {
    const newState = questions.map((obj) => {
      
      if(obj.id === id){
        const nArr = obj.answers.map((item) => item.isSelected = false)          
        obj.answers[answerId].isSelected = true

        if (obj.answers[answerId].value === obj.correctAnswer){
          return {...obj,isSelected:nArr, msg: 'Correct'}
        }
        else {
          return {...obj, isSelected: nArr,  msg: `Not correct, the answer is: ${obj.correctAnswer}`}
        }
                
      }
      return obj
    })
    setQuestions(newState)
  }

  return (
    <>

    <div className="questions-w">
        {questions.map((item) => (
          <div key={item.id} className='questions'>
            <h3>{item.question}</h3>
            <div className={!confirmed ? "answers" : "answers answers--block"}>
            {item.answers.map((q, ind) => (
               <p onClick={() =>handleChoice(item.id, ind)} key={ind} className={!q.isSelected ? 'p-color' : 'active'}>{q.value}</p>
            ))}
            </div>
            {confirmed && item.msg}
          </div>
        ))}
        {!confirmed && <button style={{margin: '1rem 0'}} onClick={() => setConfirmed(true)}>Confirm</button>}
      </div>
      </>
    
  )
}

export default Questions