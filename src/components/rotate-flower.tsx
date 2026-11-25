//animated flower with motion dependency

"use client";

import { AnimatePresence } from "motion/react";
import { motion, spring } from "motion/react";
import ArrowButton from "./arrow-button";
import { useAnimate } from "motion/react"
import { useEffect, useState } from "react";
import Image from "next/image";
import projectIMG1 from "@/assets/decorative/falcon-proj.png";
import projectIMG2 from "@/assets/decorative/ahepa-proj.png";
import projectIMG3 from "@/assets/decorative/delphi-proj.png";
import Link from "next/link";

export default function RotateFlower() {
    const [scope, animate] = useAnimate()
    const [currRotation, setCurrRotation] = useState(0); //rotation in degrees of the flower
    const [projectIndex, setProjectIndex] = useState(0); //project index --> to know which dot to highlight
    const [direction, setDirection] = useState(1); // 1 = moving right, -1 = moving left

    const projects = [
        { title: "Falcon Nutrifit", image: projectIMG1, href: "/projects#falcon-project" },
        { title: "AHEPA Ottawa", image: projectIMG2, href: "/projects#ahepa-project" },
        { title: "Oracle of Delphi", image: projectIMG3, href: "/projects#delphi-project" },
    ];

    const project = projects[projectIndex];

   const turnLeft = () => {
        setDirection(-1);
        let flower = document.getElementById("flower");
        if (flower) {
            animate(scope.current, { rotate: currRotation - 60 }, { duration: 0.8 });
        }
        setCurrRotation(currRotation - 60);
        setProjectIndex((projectIndex - 1 + 3) % 3);
    };

    const turnRight = () => {
        setDirection(1);
        let flower = document.getElementById("flower");
        if (flower) {
            animate(scope.current, { rotate: currRotation + 60 }, { duration: 0.8 });
        }
        setCurrRotation(currRotation + 60);
        setProjectIndex((projectIndex + 1) % 3);
    };

    const dotClick = (index: number) => {
        setDirection(index > projectIndex ? 1 : -1);
        if (projectIndex > index) {
            turnLeft();
        } else if (projectIndex < index) {
            turnRight();
        }
        setProjectIndex(index);
    };

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

    //slideshow variants for the project images
    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
        }),
        };

    return (
        <>
          {/* keep computer and phone views sidebyside on large screens */}

          {/* showcase images */}
          <div className="flex items-center justify-center gap-8 py-10 z-100 relative">
            
            {/* images for each project --> TODO: replace this with dynamic images */}

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={projectIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex items-center justify-center py-10 z-100 relative"
            >
             <Link href={project.href} className="flex flex-col items-start gap-4">
              <h4 className="text-white">{project.title}</h4>
                <Image
                src={project.image}
                alt={`${project.title} project preview`}
                width={1000}
                height={1000}
                sizes="(min-width: 768px) 700px, 100vw"
                loading="eager"
                />
                {/* hidden images for preloading */}
                <div className="hidden" aria-hidden="true">
                {projects.map((p) => (
                    <Image key={p.title} src={p.image} alt="" width={700} height={700} sizes="(min-width: 768px) 700px, 100vw" loading="eager" />
                ))}
                </div>
            </Link>
            </motion.div>
        </AnimatePresence>

          </div>

          <div className="relative flex w-full items-center justify-center gap-8 z-100">
           <ArrowButton href="/" direction="left" onClick={turnLeft}>
              <p></p>
            </ArrowButton>
            {/* dots for each project --> TODO: replace this with dynamic dots */}
            <div className="flex space-x-4">
              <button id="index1" className="button-style-2 w-6 h-6 md:w-10 md:h-10 p-2 bg-(--charis-green) rounded-full highlighted-dot" onClick={() => dotClick(0)}></button>
              <button id="index2" className="button-style-2 w-6 h-6 md:w-10 md:h-10 p-2 bg-(--charis-green) rounded-full" onClick={() => dotClick(1)}></button>
              <button id="index3" className="button-style-2 w-6 h-6 md:w-10 md:h-10 p-2 bg-(--charis-green) rounded-full" onClick={() => dotClick(2)}></button>
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