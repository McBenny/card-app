import Card from '../card';

import './styles.scss';
import PropTypes from 'prop-types';

function Cards(props) {
    const { data: cards, updateCards } = props;

    const changeRating = (cardId, newRating) => {
        const updatedCardsContent = cards[0].data.cards.map(card => {
            if (card.title === cardId) {
                // Not knowing how many ratings brought us to the current rating, we consider it as a single previous rating
                // Proper situation would be to have the number of previous votes:
                // const newAverage = ((card.rating || 0) + newRating) / ((card.numberOfVotes || 0) + 1)
                const newAverage = ((card.rating || newRating) + newRating) / 2;
                return {
                    ...card,
                    rating: newAverage
                }
            }
            return card;
        });
        updateCards([
            {
                data: {
                    cards: updatedCardsContent
                }
            }
        ]);
    };

    const printCards = () => {
        if (cards.length > 0) {
            return cards[0].data.cards.map(card =>
                <Card
                    key={card.title}
                    title={card.title}
                    published={card.published}
                    user={card.user}
                    rating={card.rating}
                    changeRating={changeRating}
                />
            );
        } else {
            return <p>Sorry, no data yet</p>;
        }
    };

    return (
        <div className="cards">
            {printCards()}
        </div>
    );
}

Cards.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    updateCards: PropTypes.func
};

export default Cards;
