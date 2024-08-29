import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@mui/material';

function SidebarRow({ avatarSrc, src, title }) {
    return (
        <div className="sidebarRow">
            <div className="sidebarRow__container">
                {avatarSrc && <Avatar src={avatarSrc} />}
                {src && (
                    <div className="sidebarRow__icon">
                        <img src={src} alt={title + 'icon'} />
                    </div>
                )}
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default SidebarRow;
