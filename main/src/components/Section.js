import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Section({ id, children }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div ref={ref} id={`section-${id}`}>
      {children}
    </motion.div>
  );
}

export default Section;
