import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, scale } from "motion/react";
import team1Img from "../../assets/team/team1.avif"
import team2Img from "../../assets/team/team2.avif"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
          src={team1Img}
          animate={{y:[100,150,100]}}
          transition={{duration:5,repeat:Infinity}}
          className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-4xl shadow-2xl"
        />
          <motion.img
          src={team2Img}
          animate={{x:[100,150,100]}}
          transition={{duration:10,delay:5,repeat:Infinity}}
          className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-4xl shadow-2xl"
        />
        </div>
        <div className="flex-1">
          {/* <motion.h1 
          animate={{ 
            rotate: 180,
            x:200,
            y:-200,
            transition: {duration:4}
        }}
          className="text-5xl font-bold">Latest Jobs For You</motion.h1> */}
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
