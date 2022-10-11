import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizzing from "./Quizzing";

const Quiz = () => {
  const quizes = useLoaderData();
  const question = quizes.data.questions;

  return (
    <div>
      <h1 className="md:text-5xl md:font-medium md:mb-5">
        Quiz For: {quizes.data.name}
      </h1>
      <hr />
      {question.map((quizzing, index) => (
        <Quizzing
          key={quizzing.id}
          index={index}
          quizzing={quizzing}
        ></Quizzing>
      ))}
    </div>
  );
};

export default Quiz;
