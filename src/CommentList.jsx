import Comment from "./Comment";
import data from "./data.json";
import ReplyComment from "./ReplyComment";
import './CommentList.css';
import AddComment from "./AddComment";

export default function CommentList() {
    const { comments } = data;
    // Extract the comments array from the JSON data

    return (
        <div className="CommentList">
            {comments.map((comment) => (
                <div className="comment-component">
                    <Comment
                        key={comment.id}
                        username={comment.user.username}
                        content={comment.content}
                        image={comment.user.image.png}
                        time={comment.createdAt}
                        score={comment.score}
                    />

                    {/* Check if there are replies and render them */}
                    {comment.replies.length > 0 && (
                        <div className="Replies">
                            {comment.replies.map((reply) => (
                                <ReplyComment
                                    key={reply.id}
                                    username={reply.user.username}
                                    reply={reply.content}
                                    image={reply.user.image.png}
                                    time={reply.createdAt}
                                    score={reply.score}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <AddComment />
        </div>
    )
}