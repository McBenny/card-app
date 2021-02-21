import Nav from '../components/nav';

export default {
    title: 'Components/Navigation',
    component: Nav
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
