import PropTypes from 'prop-types';

import Card from '../card';

import './styles.scss';

function Cards(props) {
    const { data: cards, updateCards } = props;
    console.log(cards);

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
    /**
     * List of the cards to display, path is a bit complex: `[{data:{cards:[...]}}]`
     */
    data: PropTypes.arrayOf(PropTypes.object),
    /**
     * Function to update the state maintained in the parent component. Allows for updating the ratings.
     */
    updateCards: PropTypes.func
};

export default Cards;
