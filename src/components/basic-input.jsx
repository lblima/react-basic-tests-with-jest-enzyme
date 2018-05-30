import React from 'react';
import './basic-input.css';

export default function BasicInput(props) {

    return (
        <input
            type={props.type}
            value={props.value}
            className='basic-input'
            placeholder={props.placeholder}
            onChange={props.handleChanges}
        />
    )
}