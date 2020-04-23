import React from 'react';
import Info from '../molecules/informationBox/infobox';
import Container from '../atoms/containers/container';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Information Box',
    component: Info,
    decorators: [ withA11y ],
}


export const InfoBox = () => (
    <Container bgcontain style={{background: "blue"}}>
        <Info style={{margin: "8rem 35rem"}}></Info>
    </Container>
    
)