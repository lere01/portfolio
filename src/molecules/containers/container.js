import React from 'react';
import '../../styles/app.css';
import classnames from 'classnames';

const Container = ({txtcontain, bgcontain, btncontain, ...props}) => {
    const myClass = classnames({'txt-container': txtcontain, 'btn-container': btncontain, 'big-container': bgcontain})
    return (
    <div className={myClass} style={props.style}> { props.children } </div>
    )
};

export default Container;