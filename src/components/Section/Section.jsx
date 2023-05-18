import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return <section>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};
