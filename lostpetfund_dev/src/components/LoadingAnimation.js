import React from 'react';

import AnimatedCircle from '../images/circle-loading.gif';

export const LoadingAnimation = ({message}) => {
    return (
        <div className="LoadingCircle wrapper">
            <div className="box">
                <h3>{message}</h3>
                <img src={AnimatedCircle} alt="loading.." />
            </div>
        </div>
    )
}