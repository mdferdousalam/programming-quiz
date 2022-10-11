import React from "react";
import Option from "./Option";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quizzing = ({ quizzing, index }) => {
  const { correctAnswer, question, options } = quizzing;

  const handleEyeButton = () => toast(correctAnswer);

  return (
    <div className="bg-slate-300 border rounded-3xl md:py-7 my-2">
      <h1 className="md:text-xl md:font-medium md:py-4">
        Quiz:{index + 1}
        <span> {question.slice(3, -4)}</span>
      </h1>
      <div className=" md:grid md:grid-cols-4">
        {options.map((option, index) => (
          <Option
            key={index}
            correctAnswer={correctAnswer}
            option={option}
          ></Option>
        ))}
        <div className="mg:grid md:grid-cols-1 md:mx-auto justify-center text-center items-center align-middle">
          <p onClick={handleEyeButton}>
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            ></ToastContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quizzing;
