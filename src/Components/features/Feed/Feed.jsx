import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../../../services/firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setPosts(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    })),
                ),
            );
    }, []);

    return (
        <div className="feed">
            <div className="feed__container">
                <StoryReel />
                <MessageSender />
                {posts.map(post => (
                    <Post
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Feed;
