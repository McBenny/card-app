import Proptypes from 'prop-types';

import './styles.scss';
import PropTypes from 'prop-types';

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
