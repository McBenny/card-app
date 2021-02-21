import Star from '../components/star';

const cardName = 'Name of the card it\'s embedded in';
export default {
    title: 'Components/Star',
    component: Star,
    args: {
        value: 1,
        cardId: cardName,
        handleClick: () => {
            window.alert('This would target the saving feature.\nCard concerned: ' + cardName + '\nChosen rating: 1');
        }
    }
};

const Template = (args) => <Star {...args} />;

export const Default = Template.bind({});

export const Golden = Template.bind({});
Golden.args = {
    golden: true
};
