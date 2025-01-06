import { PropTypes } from "prop-types";
import { motion } from "motion/react";

function Link({ href, children, icon, delayRate }) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.7, bounce: 0.4 },
        delay: delayRate * 0.3,
      }}
      animation={{ type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
    >
      {icon}
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </motion.li>
  );
}

export default Link;

// PropTypes
Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  delayRate: PropTypes.number,
};
