import React, { useContext } from "react";
import { QuizContext } from "../Layout";
import Hero from "./Hero";

import Subject from "./Subject";

const Home = () => {
  const quizes = useContext(QuizContext);
  const data = quizes.data;

  return (
    <div>
      <Hero></Hero>

      <h1 className="text-3xl font-bold">Select Quiz Subject</h1>
      <div className="grid grid-cols-4 w-4/5 mx-auto gap-3">
        {data.map((subject) => (
          <Subject key={subject.id} subject={subject}></Subject>
        ))}
      </div>
    </div>
  );
};

export default Home;
