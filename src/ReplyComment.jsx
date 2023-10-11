import './Comment.css';

export default function ReplyComment({ username, reply, image, time, score }) {
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
                    <img className="vote plus" src="/icon-plus.svg" alt="plus icon" />
                    <h3 className="vote number">{score}</h3>
                    <img className="vote minus" src="/icon-minus.svg" alt="minus icon" />
                </section>
                <section className="reply-section">
                    <img src="/icon-reply.svg" alt="reply icon" />
                    <h4>Reply</h4>
                </section>
            </div>
        </div>
    )
}