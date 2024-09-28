// components/SlideUpText.tsx

"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SlideUpText = ({
  text,
  duration = 0.6,
  children,
}: {
  text?: string;
  duration?: number;
  children?: React.ReactNode;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: duration },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 1, y: 50 }} className="sm:py-3 ">
      {text}
      {children}
    </motion.div>
  );
};

export default SlideUpText;
