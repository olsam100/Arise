import React from 'react';
import '../socialButton/socialButton.scss';

const SocialButton = ({icon, text}) => {
    return (
        <button className='button'>
            <img src={icon} alt="Social icon" />
            {text}
        </button>
    );
};

export default SocialButton;