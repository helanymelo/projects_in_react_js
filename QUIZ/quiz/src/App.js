import './App.css';
import {useState} from "react";

function App() {
  const [score, setScore]=useState(0);
  const [showScore, setShowScore]=useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  function handleAnswer(isCorrect){
    if(isCorrect){
      setScore(score+1)
    }

    const nextQuestion = currentQuestion +1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true); 
    }

  }
  const questions =[
    {
      questionsText: "What is Joye's last name?",
      answerOption: [
        { answerText: 'LeBlanc', isCorrect:false},
        { answerText: 'Green', isCorrect:false},
        { answerText: 'Tribbiani', isCorrect:true},
        { answerText: 'Galler', isCorrect:false}
      ],
    },

    {
      questionsText: "What's Monica's profession?",
        answerOption: [
          { answerText: 'Cook', isCorrect:true},
          { answerText: 'Lawyer', isCorrect:false},
          { answerText: 'Teacher', isCorrect:false},
          { answerText: 'Actress', isCorrect:false}
        ],
      },

      {
        questionsText: 'Ross was married...?',
          answerOption: [
            { answerText: 'once', isCorrect:false},
            { answerText: 'twice', isCorrect:false},
            { answerText: 'three times', isCorrect:true},
            { answerText: 'four times', isCorrect:false}
          ],
        },

        {
          questionsText: "What's Rachel's daughter's name?",
          

            answerOption: [
              { answerText: 'Emma', isCorrect:false},
              { answerText: 'Linda', isCorrect:false},
              { answerText: 'Barbara', isCorrect:true},
              { answerText: 'Jane', isCorrect:false}
             
            ],
          },

          {
            questionsText: "What's the most famous Pheebe's single?",
              answerOption: [
                { answerText: 'Smelling Cats', isCorrect:false},
                { answerText: "I'll be there for you", isCorrect:false},
                { answerText: 'Sunday Morning', isCorrect:true},
                { answerText: 'Sugar', isCorrect:false}
              ],
            },
  
  ]
            

      return (
    <div className="app">
      {showScore ?(
        <div className="scre-section">
          Você pontuou {score} de {questions.length}
        </div>
      ) :(
        <>
          <div className="question-section">
            <div className= "question-count">
            <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            
            <div className = "question-text">
              {questions[currentQuestion].questionsText}
            </div>
            
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOption.map((answerOption, index)=>(
              <button 
                onClick={()=> handleAnswer (answerOption.isCorrect)}  
                key={index}>
                {answerOption.answerText}
              </button>
            ))}

            
   
          </div>


        </>
      )}
      
    </div>
  );
}

export default App;
