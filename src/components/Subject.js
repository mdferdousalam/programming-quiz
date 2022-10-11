import React from "react";
import { Link } from "react-router-dom";

const Subject = ({ subject }) => {
  const { id, name, logo, total } = subject;

  return (
    <div>
      <div className="border justify-center items-center  align-middle rounded-md m-4 ">
        <img
          className="w-1/2 mt-3 bg-slate-600 mx-auto border rounded-lg"
          src={logo}
          alt=""
        />
        <div className="flex justify-between mt-3 p-3">
          <div className="">
            <p className="text-xl">{name}</p>
            <p className="text-xl">Total quiz: {total}</p>
          </div>
          <div>
            <Link to={`/home/${id}`}>
              <button className="px-5 py-2 font-bold bg-orange-300 border border-amber-200 rounded-lg">
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
