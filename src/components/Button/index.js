import React, { Component } from 'react';
import ee from '../../eventEmitter';

export const Button = ({text, buttonClass, clickHandler}) => (
    <button
        className={buttonClass}
        onClick={() => clickHandler ? clickHandler.call(null, text) : null}
    >
        <span className="title">{text}</span>
    </button>
);

export default Button;