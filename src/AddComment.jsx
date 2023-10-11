import './AddComment.css';
import { useState } from 'react';

export default function AddComment() {
    const [commentText, setCommentText] = useState('');

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    return (
        <footer className="add-comment">
            <textarea
                name="comment-text"
                id="text-area"
                placeholder="Add a comment..."
                onChange={handleCommentChange}
            />
            <div className="bottom">
                <img src="avatars/image-juliusomo.png" alt="user icon" />
                <button>Send</button>
            </div>
        </footer>
    )
}