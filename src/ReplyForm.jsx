import './AddComment.css';
import { useState } from 'react';

export default function ReplyForm({ commentId, addReplyToComment, removeForm }) {
    const [commentText, setCommentText] = useState('');

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    const handleReplyClick = () => {
        if (commentText) {
            const reply = {
                id: Math.ceil(Math.random() * 10),
                user: {
                    username: 'juliusomo', // Replace with the actual username of the replier
                    image: {
                        png: 'avatars/image-juliusomo.png', // Replace with the actual image URL
                        webp: 'avatars/image-juliusomo.webp', // Replace with the actual image URL
                    },
                },
                content: commentText,
                createdAt: new Date().toDateString(),
                score: 0,
            };

            // Add the new reply to the comment's replies by passing commentId
            addReplyToComment(commentId, reply);
        }
        // Remove ReplyForm on replying a comment
        removeForm();
    };

    return (
        <div className="add-comment" >
            <textarea
                name="comment-text"
                id="text-area"
                placeholder="Add a comment..."
                value={commentText}
                onChange={handleCommentChange}
            />
            <div className="bottom">
                <img src="avatars/image-juliusomo.png" alt="user icon" />
                <button onClick={handleReplyClick}>Reply</button>
            </div>
        </div>
    );
}
