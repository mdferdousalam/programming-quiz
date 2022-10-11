import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { QuizContext } from "../Layout";

const Statistics = () => {
  const quizes = useContext(QuizContext);

  return (
    <div className="">
      <h1>Quiz statistics</h1>
      <LineChart width={1000} height={700} data={quizes.data}>
        <Line type="monotype" dataKey="total" stroke="#82ca9d"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </div>
  );
};

export default Statistics;
