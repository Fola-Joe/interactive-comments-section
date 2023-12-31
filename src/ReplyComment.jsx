import './Comment.css';
import ReplyButton from './ReplyButton';
import EditButton from './EditButton';
import { useState } from 'react';

export default function ReplyComment({ username, reply, image, time, score }) {
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
            <p className="comment-writeup">{reply}</p>
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
                {username == 'juliusomo' ? <EditButton /> : <ReplyButton />}
            </div>
        </div>
    )
}