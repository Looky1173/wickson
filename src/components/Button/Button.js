import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled.js';

/**
 * Primary UI component for user interaction
 */
const Button = ({ type = 'filled', variant = 'primary', size = 'medium', disabled = false, loading = false, onClick, children }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} variant={variant} loading={loading} className={[size, type, variant].join(' ')}>
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    type: PropTypes.oneOf(['filled', 'tonal', 'outlined', 'text']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'filled',
    variant: 'primary',
    size: 'medium',
    disabled: false,
};

export default Button;
