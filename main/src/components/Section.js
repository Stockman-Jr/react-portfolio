import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Section({ id, children }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      id={`section-${id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default Section;
