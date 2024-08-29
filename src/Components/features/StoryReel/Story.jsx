import React from 'react';
import './Story.css';
import { Avatar } from '@mui/material';

function Story({ image, profileSrc, title }) {
    return (
        <div className="story" style={{ backgroundImage: `url(${image})` }}>
            <div className="story__avatarContainer">
                <Avatar className="story__avatar" src={profileSrc}></Avatar>
            </div>
            <h4>{title}</h4>
        </div>
    );
}

export default Story;
