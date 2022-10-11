import React from "react";

const Hero = () => {
  return (
    <div className="flex sm:flex-column md:flex-row justify-between align-middle items-center justify-center border p-10 rounded-md">
      <div>
        <p className="text-2xl w-2/3 bg-orange-300 p-10 rounded-md">
          Test Your Knowledge on React, JavaScript, CSS and Git.Here You can
          find some common questions respective to the topics.If you foun
          yourself less than 15 you neeed more practise.Git is essential for
          Developers so learn it.
        </p>
      </div>
      <div>
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
