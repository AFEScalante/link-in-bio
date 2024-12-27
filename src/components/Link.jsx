import { PropTypes } from "prop-types";

function Link({ href, children, icon }) {
  return (
    <li>
      {icon}
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  );
}

export default Link;

// PropTypes
Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
};
