import React,{useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";
//...rest of imports
function QuestionList() {
  const [questions, setQuestions]= useState([]);
  
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then ((question) => setQuestions(question))
  }, []);

  function handleDeleteQuestion(deletedQ){
    const updatedQuestions = questions.filter((q) => q.id !== deletedQ.id)
    setQuestions(updatedQuestions)
  }
function newQuestions(){
setQuestions()
}

  const questionItems = questions.map((q)=>(
    <QuestionItem
    key= {q.id}
    question= {q}
    handleDeleteQuestion={handleDeleteQuestion}
    />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
