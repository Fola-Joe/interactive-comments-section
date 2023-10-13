import './Comment.css';

export default function ReplyButton({ toggle }) {
    return (
        <section
            className="reply-section"
            onClick={toggle}
        >
            <img src="/icon-reply.svg" alt="reply icon" />
            <h4>Reply</h4>
        </section>
    )
}