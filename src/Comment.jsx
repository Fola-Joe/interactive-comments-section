import './Comment.css';

export default function Comment() {
    return (
        <div className="Comment">
            <section className="comment-top">
                <img src="/avatars/image-amyrobson.png" alt="avatar icon" />
                <h1>amyrobson</h1>
                <h2>1 month ago</h2>
            </section>
            <p className="comment-writeup">
                Impressive! Though it seems Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque reiciendis sapiente voluptatibus officia cumque aut atque,
                qui soluta consequatur perspiciatis, aperiam hic cum dignissimos
                distinctio quis est provident. Commodi, quasi!
            </p>
            <div className="comment-bottom">
                <section className="vote-section">
                    <img className="vote plus" src="/icon-plus.svg" alt="plus icon" />
                    <h3 className="vote number">12</h3>
                    <img className="vote minus" src="/icon-minus.svg" alt="minus icon" />
                </section>
                <section  className="reply-section">
                    <img src="/icon-reply.svg" alt="reply icon" />
                    <h4>Reply</h4>
                </section>
            </div>
        </div>
    )
}