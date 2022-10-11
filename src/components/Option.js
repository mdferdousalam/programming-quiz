import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ correctAnswer, option }) => {
  let rightAnswer = 0;
  let wrongAnswer = 0;
  const handleAnswer = () => {
    if (option === correctAnswer) {
      rightAnswer = rightAnswer + 1;
      toast("Wow ! Right Answer. Good Job.");
    } else {
      wrongAnswer = wrongAnswer + 1;

      toast("Ups! wrong Answer. Try again.");
    }
  };

  return (
    <div
      onClick={handleAnswer}
      className=" border mx-auto p-5 bg-orange-300 rounded-lg"
    >
      {option}
    </div>
  );
};

export default Option;
