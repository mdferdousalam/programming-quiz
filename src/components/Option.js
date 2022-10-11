import React from "react";

const Option = ({ correctAnswer, option }) => {
  const handleAnswer = (e) => {
    console.log(e);
    if (e === correctAnswer) {
      alert("correct Answer");
    }
  };

  return (
    <div>
      <li onClick={(e) => handleAnswer(e.target.value)}>{option}</li>
    </div>
  );
};

export default Option;
