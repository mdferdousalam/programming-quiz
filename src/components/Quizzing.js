import React from "react";
import Option from "./Option";

const Quizzing = ({ quizzing, index }) => {
  const { correctAnswer, question, options } = quizzing;

  return (
    <div className="bg-slate-300 border rounded-3xl py-7 my-2">
      <h1 className="text-xl font-medium py-4">
        Quiz:{index + 1}
        <span> {question.slice(3, -4)}</span>
      </h1>
      <div>
        {options.map((option, index) => (
          <Option
            key={index}
            correctAnswer={correctAnswer}
            option={option}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Quizzing;
