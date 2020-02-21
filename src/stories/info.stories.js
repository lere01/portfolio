import React from 'react';
import Info from '../molecules/informationBox/infobox';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Information Box',
    component: Info,
    decorators: [ withA11y ],
}


export const InfoBox = () => (
    <Info></Info>
)