//animated flower with motion dependency

"use client";

import { motion, spring } from "motion/react";
import ArrowButton from "./arrow-button";
import { useAnimate } from "motion/react"
import { useEffect, useState } from "react";

export default function RotateFlower() {
    const [scope, animate] = useAnimate()
    const [currRotation, setCurrRotation] = useState(0); //rotation in degrees of the flower
    const [projectIndex, setProjectIndex] = useState(0); //project index --> to know which dot to highlight

    const turnLeft = () => {
     let flower = document.getElementById("flower");
        if (flower){
            animate(scope.current, { rotate: currRotation - 60 }, { duration: 0.8 })
        }
        setCurrRotation(currRotation - 60);
        setProjectIndex((projectIndex - 1 + 3) % 3); //wrap around to last project if going left from first project
    }

    const turnRight = () => {
    let flower = document.getElementById("flower");
        if (flower){
            animate(scope.current, { rotate: currRotation + 60 }, { duration: 0.8 })
        }
        setCurrRotation(currRotation + 60);
        setProjectIndex((projectIndex + 1) % 3); //wrap around to last project if going right from last project
    }

    useEffect(() => {
        //update the highlighted dot based on the current project index
        for (let i = 0; i < 3; i++) {
            let dot = document.getElementById(`index${i + 1}`);
            if (dot) {
                if (i === projectIndex) {
                    dot.classList.add("highlighted-dot");
                } else {
                    dot.classList.remove("highlighted-dot");
                }
            }
        }
    }, [projectIndex]);

    const dotClick = (index: number) => {
        if(projectIndex > index){
            turnLeft();
        } else if (projectIndex < index){
            turnRight();
        }
        setProjectIndex(index);
    }

    return (
        <>
          {/* keep computer and phone views sidebyside on large screens */}

          {/* showcase images */}
          <div className="flex items-center justify-center gap-8 py-10 z-100 relative">
            <svg id="showcase1" width="836" height="378" viewBox="0 0 836 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M702.127 377C686.593 377 674 364.419 674 348.899V109.101C674 93.5814 686.593 81 702.127 81H807.135C822.669 81 835.262 93.5814 835.262 109.101V348.899C835.262 364.419 822.669 377 807.135 377H702.127ZM807.135 347.025C812.313 347.025 816.51 345.348 816.51 343.278V114.722C816.51 112.652 812.313 110.975 807.135 110.975H702.127C696.949 110.975 692.751 112.652 692.751 114.722V343.278C692.751 345.348 696.949 347.025 702.127 347.025H807.135ZM769.632 362.013C771.703 362.013 773.382 360.335 773.382 358.266C773.382 356.196 771.703 354.519 769.632 354.519H739.63C737.559 354.519 735.879 356.196 735.879 358.266C735.879 360.335 737.559 362.013 739.63 362.013H769.632Z" fill="white"/>
                <path d="M597.959 0C608.475 0.000769054 617 8.52511 617.001 19.041V375.057C617.001 376.161 616.106 377.057 615.001 377.057H2C0.895427 377.057 0 376.161 0 375.057V19.041C0.00107264 8.52516 8.52608 0.000847552 19.042 0H597.959ZM19.042 356.011C19.042 357.115 19.9374 358.011 21.042 358.011H595.959C597.064 358.011 597.959 357.115 597.959 356.011V333.353C597.959 332.248 597.064 331.353 595.959 331.353H21.042C19.9374 331.353 19.042 332.248 19.042 333.353V356.011ZM19.042 321.734C19.042 322.839 19.9374 323.734 21.042 323.734H595.959C597.064 323.734 597.959 322.839 597.959 321.734V21.041C597.959 19.9364 597.064 19.041 595.959 19.041H21.042C19.9374 19.041 19.042 19.9364 19.042 21.041V321.734Z" fill="white"/>
            </svg>
          </div>

          <div className="relative flex w-full items-center justify-center gap-8 z-100">
           <ArrowButton href="/" direction="left" onClick={turnLeft}>
              <p></p>
            </ArrowButton>
            {/* dots for each project --> TODO: replace this with dynamic dots */}
            <div className="flex space-x-4">
              <button id="index1" className="button-style-2 w-6 h-6 md:w-10 md:h-10 p-2 bg-(--charis-accent-green) rounded-full highlighted-dot" onClick={() => dotClick(0)}></button>
              <button id="index2" className="button-style-2 w-6 h-6 md:w-10 md:h-10 p-2 bg-(--charis-accent-green) rounded-full" onClick={() => dotClick(1)}></button>
              <button id="index3" className="button-style-2 w-6 h-6 md:w-10 md:h-10 p-2 bg-(--charis-accent-green) rounded-full" onClick={() => dotClick(2)}></button>
            </div>
            <ArrowButton href="/" direction="right" onClick={turnRight}>
              <p></p>
            </ArrowButton>
          </div>

          {/* flower rotating in the bottom corner */}
            <motion.div id="flower" ref={scope} className="absolute -bottom-10 right-0"
            transition={{type: spring, duration: 0.5}}>
                <svg width="1261" height="1484" viewBox="0 0 1261 1484" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M298.489 596.268C500.486 568.124 548.429 741.466 548.492 741.695C548.479 741.739 500.592 905.488 298.489 884.06C96.4499 865.31 0.0867046 740.277 0 740.165C0 740.165 96.3589 624.431 298.489 596.268Z" fill="#042705"/>
                    <path d="M588.505 381.34C713.627 544.006 589.015 672.625 588.849 672.796C588.849 672.796 424.51 712.808 341.815 525.236C309.014 453.357 316.341 467.652 280.305 323.756C244.27 179.86 89.3935 166.083 89.3935 166.083C89.3935 166.083 254.005 143.634 371.216 207.415C444.01 247.026 540.536 318.978 588.505 381.34Z" fill="#042705"/>
                    <path d="M676.141 1101.98C550.935 939.209 675.796 810.526 675.796 810.526C675.857 810.511 840.151 770.551 922.83 958.088C955.631 1029.97 948.305 1015.67 984.341 1159.57C1020.38 1303.46 1175.25 1317.24 1175.25 1317.24C1175.25 1317.24 1010.64 1339.69 893.43 1275.91C820.636 1236.3 724.11 1164.35 676.141 1101.98Z" fill="#042705"/>
                    <path d="M676.139 378.275C551.035 540.918 675.591 669.524 675.793 669.733C675.793 669.733 840.134 709.743 922.828 522.171C1007.79 335.993 948.765 189.148 948.728 189.057C948.728 189.057 801.345 215.501 676.139 378.275Z" fill="#042705"/>
                    <path d="M585.472 1100.68C710.642 937.95 585.889 809.294 585.817 809.22C585.817 809.22 421.477 769.21 338.782 956.782C253.871 1142.85 312.779 1289.64 312.882 1289.9C312.882 1289.9 460.266 1263.45 585.472 1100.68Z" fill="#042705"/>
                    <path d="M962.131 596.267C760.001 568.104 712.128 741.695 712.128 741.695C712.226 742.029 760.207 905.468 962.131 884.059C1164.26 865.301 1260.62 740.163 1260.62 740.163C1260.62 740.163 1164.26 624.43 962.131 596.267Z" fill="#042705"/>
                </svg>
            </motion.div>
    </>
  );
    
}