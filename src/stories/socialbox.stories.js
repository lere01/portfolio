import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import SocialBox from '../molecules/socialmedia/socialmedia';


export default {
    title: 'Social Box',
    component: SocialBox,
    decorators: [ withA11y ],
}


export const SocialIcons = () => <SocialBox></SocialBox>