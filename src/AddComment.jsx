import './AddComment.css';
import { useState } from 'react';

export default function AddComment({ onAddComment }) {
    const [commentText, setCommentText] = useState('');

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    const handleSendClick = () => {
        if (commentText.trim()) {
            onAddComment(commentText);
        }
        // Clear the input field
        setCommentText('');
    };

    return (
        <footer className="add-comment">
            <textarea
                name="comment-text"
                id="text-area"
                placeholder="Add a comment..."
                value={commentText}
                onChange={handleCommentChange}
            />
            <div className="bottom">
                <img src="avatars/image-juliusomo.png" alt="user icon" />
                <button onClick={handleSendClick}>Send</button>
            </div>
        </footer>
    );
}
