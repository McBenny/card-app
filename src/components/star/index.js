import PropTypes from 'prop-types';

import Button from '../button';

function Star(props) {
    const { golden, value, cardId, handleClick } = props;
    const label = `Rate ${value} star${value > 1 ? 's' : ''}`;
    return (
        <Button
            additionalClasses={['star', golden ? 'star--gold' : '']}
            handleClick={() => handleClick(cardId, value)}
        >
            <span className="sr-only">{label}</span>
        </Button>
    );
}

Star.propTypes = {
    golden: PropTypes.bool,
    value: PropTypes.number,
    cardId: PropTypes.string,
    handleClick: PropTypes.func
};

export default Star;
