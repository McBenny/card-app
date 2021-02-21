import PropTypes from 'prop-types';

import Button from '../button';

/**
 * Displays a grey or golden star. This component is to be used in group of 5 creating a representation of the rating of
 * the card out of 5.
 *
 * The user sees a rounded value: if rating is 2.9, the first 2 stars will be gold, 3 last will stay grey. If rating is
 * 4.1, the first 4 stars will be gold.
 *
 * If the app is not rated (`rating` is `null`), all stars are grey.
 *
 * Pressing the button will activate the update of the rating.
 * This component makes use of the `<Button />` component.
 *
 * See `<Card />` component for more details.
 */
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
    /**
     * Should this star be gold?
     */
    golden: PropTypes.bool,
    /**
     * The rank of the star. 2nd star will give a mark of 2, 5th star will give a mark of 5.
     */
    value: PropTypes.number,
    /**
     * The id of the card the set of stars is on. ENables update in the ratings stored in the app (update the states).
     */
    cardId: PropTypes.string,
    /**
     * The function saving user's rating and updating the rating with a new average.
     */
    handleClick: PropTypes.func
};

export default Star;
