import React from 'react';

import Button from '../components/button';

import '../components/header/styles.scss';
import profilePicture from '../assets/profile.svg';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        handleClick: () => {}
    }
};

const Template = (args) => <Button {...args} />;

export const Menu = Template.bind({});
Menu.args = {
    additionalClasses: ['menu']
};

export const Profile = Template.bind({});
Profile.args = {
    additionalClasses: ['profile'],
    children: <img src={profilePicture} alt="User Profile Picture" className="header__profile-picture" />
};

export const Star = Template.bind({});
Star.args = {
    additionalClasses: ['star']
};

export const StarGolden = Template.bind({});
StarGolden.args = {
    additionalClasses: ['star', 'star--gold']
};
