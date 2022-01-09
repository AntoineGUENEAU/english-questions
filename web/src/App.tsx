import React, {useState} from 'react';
import Question from "./modules/questions/components/Question";
import BtnChangeQuestion from "./modules/questions/components/BtnChangeQuestion";
import './app.css'
export default function App() {

  const [question, setQuestion] = useState("");

  const handleNewQuestion = async () => {
    const response: Response = await fetch(process.env.REACT_APP_API_URL!)
    if (response.ok) {
      const question: string = (await response.json()).question;
      setQuestion(question)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Question question={question} />
        <BtnChangeQuestion clickHandle={handleNewQuestion}/>
      </div>
    </div>
  );
}

