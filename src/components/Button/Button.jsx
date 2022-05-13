import PropTypes from 'prop-types';
import Wrap from './Button.styled';

const Button = ({ children, onClick, padding = '5px' }) => (
  <Wrap type="button" onClick={onClick} padding={padding}>
    {children}
  </Wrap>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  padding: PropTypes.string,
};

export default Button;
