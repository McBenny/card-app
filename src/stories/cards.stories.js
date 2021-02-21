import Cards from '../components/card';

export default {
    title: 'Components/Cards',
    component: Cards,
    args: {
        data: [
            {
                data: {
                    cards: [
                        {
                            title: "App title 1",
                            published: true,
                            user: "Netfront",
                            rating: 3.2
                        },
                        {
                            title: "App title 2",
                            published: true,
                            user: "Netfront",
                            rating: 4.8
                        }
                    ]
                }
            }
        ],
        updateCards: () => {}
    }
};

const Template = (args) => <Cards {...args} />;

export const Default = Template.bind({});
