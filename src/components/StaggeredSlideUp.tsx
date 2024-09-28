
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// components/StaggeredSlideUp.tsx

interface StaggeredSlideUpProps {
  elements: string[];
  duration?: number;
  threshold?: number;
  staggerChildren?: number;
}

const StaggeredSlideUp = ({
  elements,
  duration = 0.6,
  threshold = 0.1,
  staggerChildren = 0.3,
}: StaggeredSlideUpProps) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: threshold } // Start animation when 10% of the container is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren, // Delay each child by 0.3s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: duration } },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {(elements ?? []).map((element, index) => (
        <motion.div variants={itemVariants} key={index}>
          <span>{element}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredSlideUp;
