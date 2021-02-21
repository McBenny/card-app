import Proptypes from 'prop-types';

import './styles.scss';
import PropTypes from 'prop-types';

/**
 * @param additionalClasses array   List of CSS classes
 * @param handleClick       func    Function fired onClick
 * @param props             obj     Any additional properties passed
 * @return {JSX.Element}
 */
/**
 * This is a generic button to be used across the application. Has no specific appearance on its own, needs additional classes.
 *
 * - `menu`
 * - `profile`
 * - `star`
 * - `star star--gold`
 */
function Button({ additionalClasses, handleClick, ...props }) {
    const classesList = additionalClasses.map(aClass => `button--${aClass}`)
    return (
        <button className={`button ${classesList.join(' ')}`} onClick={handleClick} {...props}>
            {props.children}
        </button>
    );
}

Button.defaultProps = {
    handleClick: () => {}
}

Button.propTypes = {
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
    handleClick: PropTypes.func
};

export default Button;
