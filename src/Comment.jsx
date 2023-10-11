import './Comment.css';
import { useState } from 'react';

export default function Comment({ username, content, image, time, score }) {
    const [newScore, setNewScore] = useState(score);

    // function to update votes
    const updateScore = (value) => {
        // Calculate the updated score
        const updatedScore = newScore + value;

        // Prevent the score from going below 0
        const nonNegativeScore = Math.max(updatedScore, 0);

        setNewScore(nonNegativeScore);
    };

    return (
        <div className="Comment">
            <section className="comment-top">
                <img src={image} alt="user avatar" />
                <h1>{username}</h1>
                <h2>{time}</h2>
            </section>
            <p className="comment-writeup">{content}</p>
            <div className="comment-bottom">
                <section className="vote-section">
                    <img
                        className="vote plus"
                        src="/icon-plus.svg"
                        alt="plus icon"
                        onClick={() => updateScore(1)}
                    />
                    <h3 className="vote number">{newScore}</h3>
                    <img
                        className="vote minus"
                        src="/icon-minus.svg"
                        alt="minus icon"
                        onClick={() => updateScore(-1)}
                    />
                </section>
                <section className="reply-section">
                    <img src="/icon-reply.svg" alt="reply icon" />
                    <h4>Reply</h4>
                </section>
            </div>
        </div>
    )
}