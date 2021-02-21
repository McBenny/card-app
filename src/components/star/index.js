import PropTypes from 'prop-types';

import Button from '../button';

function Star(props) {
    const label = `Rate ${props.value} star${props.value > 1 ? 's' : ''}`;
    return (
        <Button
            additionalClasses={['star', props.golden ? 'star--gold' : '']}
            handleClick={() => console.log('rating:', props.value)}
        >
            <span className="sr-only">{label}</span>
        </Button>
    );
}

Star.propTypes = {
    golden: PropTypes.bool,
    value: PropTypes.number
};

export default Star;
