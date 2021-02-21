import PropTypes from 'prop-types';

import Star from '../star';

import './styles.scss';

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
    title: PropTypes.string,
    published: PropTypes.bool,
    user: PropTypes.string,
    rating: PropTypes.number,
    changeRating: PropTypes.func
};

export default Card;
