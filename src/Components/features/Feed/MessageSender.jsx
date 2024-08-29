import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@mui/material';
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import CreatePostModal from './CreatePostModal';
import { useStateValue } from '../../../StateProvider';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postContent, setPostContent] = useState('');
    const [image, setImage] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const emptyValues = () => {
        setIsModalOpen(false);
        setImage('');
        setPostContent('');
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <div className="messageSender__input" onClick={openModal}>
                    {postContent == '' ? (
                        <p>
                            What's on your mind,{' '}
                            {user.displayName.split(' ')[0]}?
                        </p>
                    ) : (
                        <p>{postContent}</p>
                    )}
                </div>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCameraFrontRoundedIcon
                        style={{ color: 'rgb(239, 40, 73)' }}
                    />
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option" onClick={openModal}>
                    <CollectionsRoundedIcon
                        style={{ color: 'rgb(68, 189, 98)' }}
                    />
                    <h3>Photo/video</h3>
                </div>
                <div className="messageSender__option">
                    <MoodRoundedIcon style={{ color: 'rgb(247,185,39)' }} />
                    <h3>Feeling/activity</h3>
                </div>
            </div>
            <CreatePostModal
                isOpen={isModalOpen}
                onClose={closeModal}
                postContent={postContent}
                handleContentChange={e => {
                    setPostContent(e.target.value);
                }}
                image={image}
                handleImageChange={e => {
                    setImage(e.target.value);
                }}
                emptyValues={emptyValues}
            />
        </div>
    );
}

export default MessageSender;
