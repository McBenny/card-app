import App from '../containers/app';

export default {
    title: 'Pages / App',
    component: App,
};

const Template = (args) => <App {...args} />;

export const FullPage = Template.bind({});
