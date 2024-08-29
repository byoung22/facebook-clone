import React, { useState } from 'react';
import { Modal, Avatar, Button } from '@mui/material';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import './CreatePostModal.css';
import { useStateValue } from '../../../StateProvider';
import db from '../../../services/firebase';
import firebase from 'firebase/compat/app';

function CreatePostModal({
    isOpen,
    onClose,
    postContent,
    handleContentChange,
    image,
    handleImageChange,
    emptyValues,
}) {
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: postContent,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: image,
        });

        onClose();
        emptyValues();
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            slotProps={{ backdrop: { invisible: true } }}
        >
            <div className="createPostModal">
                <div className="createPostModal__title">
                    <h2>Create post</h2>
                </div>
                <div className="createPostModal__user">
                    <Avatar src={user.photoURL} />
                    <span>{user.displayName}</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={postContent}
                        onChange={handleContentChange}
                        placeholder="What's on your mind?"
                    />
                    <div className="createPostModal__footer">
                        <div className="createPostModal__image">
                            <div className="createPostModal__imageUrl">
                                <input
                                    onChange={handleImageChange}
                                    value={image}
                                    placeholder="Add an image to your post"
                                ></input>
                                <CollectionsRoundedIcon
                                    style={{ color: 'rgb(68, 189, 98)' }}
                                />
                            </div>
                            {image != '' && (
                                <img src={image} alt="Uploaded content" />
                            )}
                        </div>
                        <div className="createPostModal__actions">
                            <Button variant="contained" type="submit">
                                Post
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default CreatePostModal;
