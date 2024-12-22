"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";
import ProjectsSection from "./ProjectsSection";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto   flex flex-col items-center"
    >
      <ProjectsSection />
    </motion.div>
  );
};

export default ProjectList;
