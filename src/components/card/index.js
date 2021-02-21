import PropTypes from 'prop-types';

import Star from '../star';

import './styles.scss';

/**
 * Displays a card with the app data passed as props. Takes available width, picture keeps a 4:3 ratio. Hover state
 * enlarges slightly the card (8%).
 *
 * Embeds a set of `<Star />` components to represent the rating of the app: 5 grey stars become gold depending on the
 * rating: if rating is 2.9, the first 2 stars will be gold, 3 last will stay grey. If rating is 4.1, the first 4 stars
 * will be gold.
 *
 * If the app is not rated (`rating` is `null`), all stars are grey.
 *
 * Pressing the button will activate the update of the rating. The calculation of the new rating is a simple average
 * between previous rating and user's rating. Proper calculation should involve the number of previous ratings to give
 * an accurate average but as we don't have it, we consider the previous rating as being the only previous rating.
 *
 * TODO: Support for an image
 */
function Card(props) {
    const { title, published, user, rating, changeRating } = props;
    const status = published ? 'Published' : 'Unpublished';
    const statusClass = published ? 'published' : 'unpublished';
    const ratingDisplay = rating ? (Math.round(rating * 10) / 10).toFixed(1) : 'No review';
    const stars = (rating) => {
        const starsNumber = 5;
        const ratingInteger = Math.floor(parseInt(rating, 10));
        let starsTemplates = [];
        for (let i = 0; i < starsNumber; i += 1) {
            starsTemplates.push(
                <Star
                    key={`${title}-${i}`}
                    golden={i < ratingInteger}
                    value={i + 1}
                    cardId={title}
                    handleClick={changeRating}
                />
            );
        }
        return starsTemplates;
    }
    return (
        <div className="card">
            <div className="card__illustration" />
            <span className={`card__status card__status--${statusClass}`}>
                {status}
            </span>
            <div className="card__content">
                <h2 className="card__title">
                    {title}
                </h2>
                <p>by {user}</p>
                <div className="card__rating">
                    {stars(rating)} {ratingDisplay}
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    /**
     * The title of the card
     */
    title: PropTypes.string,
    /**
     * Publishing state
     */
    published: PropTypes.bool,
    /**
     * User of the app
     */
    user: PropTypes.string,
    /**
     * Current rating of the app, out of 5
     */
    rating: PropTypes.number,
    /**
     * Function to update the rating on click on one of the stars
     */
    changeRating: PropTypes.func
};

Card.defaultProps = {
    published: false,
    rating: null
};

export default Card;
