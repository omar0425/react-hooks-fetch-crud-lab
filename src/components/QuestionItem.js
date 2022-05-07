import React from "react";

function QuestionItem({ question, handleDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteQuestion(question));
  }
  function updateQuestions(e){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex" : e.target.value
      })
    })
  
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={updateQuestions}defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
