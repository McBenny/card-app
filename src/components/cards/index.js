import Card from '../card';
import './styles.scss';

function Cards() {
    const cards = [
        {
            "data": {
                "cards": [
                    {
                        "title" : "App title 1",
                        "published": true,
                        "user": "Netfront",
                        "rating": 3.2
                    },
                    {
                        "title" : "App title 2",
                        "published": true,
                        "user": "Netfront",
                        "rating": 4.8
                    },
                    {
                        "title" : "App title 3",
                        "published": false,
                        "user": "Netfront",
                        "rating": 4.0
                    },
                    {
                        "title" : "App title 4",
                        "published": true,
                        "user": "Netfront",
                        "rating": 3.8
                    },
                    {
                        "title" : "App title 5",
                        "published": true,
                        "user": "Netfront",
                        "rating": 3.8
                    },
                    {
                        "title" : "App title 6",
                        "published": true,
                        "user": "Netfront",
                        "rating": null
                    },
                    {
                        "title" : "App title 7",
                        "published": true,
                        "user": "Netfront",
                        "rating": 4.0
                    },
                    {
                        "title" : "App title 8",
                        "published": true,
                        "user": "Netfront",
                        "rating": 3.8
                    }
                ]
            }
        }
    ];

    const printCards = () => {
        return cards[0].data.cards.map(card =>
            <Card key={card.title} title={card.title} published={card.published} user={card.user} rating={card.rating} />
        );
    };

    return (
        <div className="cards">
            {printCards()}
        </div>
    );
}

export default Cards;
