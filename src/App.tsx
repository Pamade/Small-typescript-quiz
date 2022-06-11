import React, {useState} from 'react';
import {Question} from './components/model';
import Questions from './components/Questions/Questions';
import './styles/main.scss';

const questionsTemp = [{
  id:1,
  question: 'How old am I?',
  answers: [{value: '20', isSelected: false}, {value: '15', isSelected: false}, {value: '30', isSelected: false}],
  correctAnswer: '20',
  msg: 'Value not chosen'
},{
  id:2,
  question: 'What is the name of the president of Poland',
  answers: [{value: 'Andrew', isSelected: false}, {value: 'Andrzej', isSelected: false}, {value: 'Mariusz', isSelected: false}],
  correctAnswer: 'Andrzej',
  msg: 'Value not chosen'
}

]
function App() {

  const [questions, setQuestions] = useState<Question[]>(questionsTemp)

  return (
    <div className="App">
      <header>
      <h1>Quiz</h1>
      </header>
      <main>
        <h2>Super Quizzz!!!</h2>
        <p style={{margin: '1rem 0'}}>You are given one question and four answers, only one will be correct</p>
        <Questions questions={questions} setQuestions={setQuestions}/>
      </main>
    </div>
  );
}

export default App;
