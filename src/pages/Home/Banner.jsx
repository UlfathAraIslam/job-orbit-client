import React from "react";
import { motion, scale } from "motion/react";
import team1Img from "../../assets/team/team1.avif"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={team1Img}
        />
        <div>
          <motion.h1 
          animate={{ 
            rotate: 180,
            transition: {duration:4}
        }}
          className="text-5xl font-bold">Latest Jobs For You</motion.h1>
          <motion.h1 
          initial={{scale:0}}
          animate={{scale:1, transition:{duration:4}}}
          className="text-5xl font-bold">Remote <motion.span
          animate={
            {color:['#e92c0b','#0be944','#d2e90b'],
              transition:{duration:2,repeat:Infinity}
            }
          }
          >Jobs</motion.span> For You</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
