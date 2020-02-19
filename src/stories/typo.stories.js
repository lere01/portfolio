import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import Typo from '../atoms/typography/typo';
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

export default {
    title: 'myTexts',
    component: Typo,
    decorator: [withA11y, withKnobs],
}


// export const SpecialText = () => (
//     <Typo
//         darkhead={boolean("Dark Heading", false)}
//         bluehead={boolean("Blue Heading", true)}
//     >
//         This is a text
//     </Typo>
// );


export const darkHeading = () => <Typo darkhead>This is a dark big text</Typo>

export const blueHeading = () => <Typo bluehead>This is a blue big text</Typo>

export const subheading = () => <Typo subhead>This is a dark medium text</Typo>

export const text1 = () => <Typo txt1>This is a text</Typo>

export const text2 = () => <Typo txt2>This is a text</Typo>

export const text3 = () => <Typo txt3>This is a text</Typo>

export const text4 = () => <Typo txt4>This is a text</Typo>