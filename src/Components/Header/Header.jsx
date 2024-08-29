import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar } from '@mui/material';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/900px-2023_Facebook_icon.svg.png?20231011122028"
                    alt="facebook logo"
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeRoundedIcon />
                </div>
                <div className="header__option">
                    <PeopleOutlineIcon />
                </div>
                <div className="header__option">
                    <OndemandVideoRoundedIcon />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header__icon">
                    <AppsRoundedIcon />
                </div>
                <div className="header__icon">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Font_Awesome_5_brands_facebook-messenger.svg/768px-Font_Awesome_5_brands_facebook-messenger.svg.png?20181017220825"
                        height="30px"
                        alt="messenger"
                    />
                </div>
                <div className="header__icon">
                    <NotificationsIcon />
                </div>
                <div className="header__icon">
                    <Avatar src={user.photoURL} />
                </div>
            </div>
        </div>
    );
}

export default Header;
