import Card from '../components/card';
import { useState } from 'react';

export default {
    title: 'Components/Card',
    component: Card,
    args: {
        title: 'Title of the card',
        published: true,
        user: 'User name',
        rating: 3.2,
        changeRating: () => {
            window.alert('This updates the rating to the average between 3.2 and the index of the star (here: 1) => 2.1');
        }
    }
};

const Template = (args) => {
    const [rating, setRating] = useState(args.rating);
    const updatedArgs = {
        ...args,
        rating,
        changeRating: (cardId, newRating) => {
            setRating(((rating || newRating) + newRating) / 2);
        }
    }
    return <div style={{ maxWidth: 250 }}>
        <Card {...updatedArgs} />
    </div>;
}

export const Published = Template.bind({});
Published.args = {
    rating: 3.2,
};

export const Unpublished = Template.bind({});
Unpublished.args = {
    rating: 3.2,
    published: false
};

export const Unrated = Template.bind({});
Unrated.args = {
    rating: null
};
