import React from 'react';
import { Avatar } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import './Post.css';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            {image && (
                <div className="post__image">
                    <img src={image} alt="post image" />
                </div>
            )}
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpAltOutlinedIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineRoundedIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ReplyRoundedIcon className="replyIcon" />
                    <p>Share</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
