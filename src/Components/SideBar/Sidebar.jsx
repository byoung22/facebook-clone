import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import friendsIcon from '../../assets/friends.png';
import memoriesIcon from '../../assets/memories.png';
import savedIcon from '../../assets/saved.png';
import groupIcon from '../../assets/group.png';
import videoIcon from '../../assets/video.png';
import { useStateValue } from '../../StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow
                avatarSrc={user.photoURL}
                title={user.displayName}
            ></SidebarRow>
            <SidebarRow src={friendsIcon} title="Friends"></SidebarRow>
            <SidebarRow src={memoriesIcon} title="Memories"></SidebarRow>
            <SidebarRow src={savedIcon} title="Saved"></SidebarRow>
            <SidebarRow src={groupIcon} title="Groups"></SidebarRow>
            <SidebarRow src={videoIcon} title="Video"></SidebarRow>
        </div>
    );
}

export default Sidebar;
