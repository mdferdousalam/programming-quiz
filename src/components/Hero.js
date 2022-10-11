import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row justify-between align-middle items-center justify-center border p-10 rounded-md">
      <div className="text-2xl w-2/3 mb-7 bg-orange-300 flex align-middle items-center justify-center md:p-10 rounded-md">
        <p>
          Test Your Knowledge on React, JavaScript, CSS and Git.Here You can
          find some common questions respective to the topics.If you foun
          yourself less than 15 you neeed more practise.Git is essential for
          Developers so learn it.
        </p>
      </div>
      <div className="md:pl-5 md:w-1/3">
        <img
          className=""
          src="https://miro.medium.com/max/1400/1*77VFzpklgL26QApHui2N4A.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
