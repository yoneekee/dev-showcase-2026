import { motion, useScroll, useSpring } from "framer-motion";
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div aria-hidden="true" style={{ scaleX, transformOrigin: "0%" }} className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] bg-primary" />;
};
export default ScrollProgressBar;
