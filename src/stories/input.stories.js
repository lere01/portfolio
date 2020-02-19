import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import InputSpace from '../atoms/input/inputs';

export default {
    title: 'Input',
    component: InputSpace,
    decorators: [withA11y]
};

export const formInput = () => <InputSpace myinput></InputSpace>