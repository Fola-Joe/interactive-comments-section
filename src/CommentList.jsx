import Comment from "./Comment";
import data from "./data.json";

export default function CommentList() {
    const { comments } = data;
    // Extract the comments array from the JSON data

    return (
        <div className="CommentList">
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    username={comment.user.username}
                    content={comment.content}
                    image={comment.user.image.png}
                    time={comment.createdAt}
                    score={comment.score}
                />
            ))}
            {/* <Comment /> */}
        </div>
    )
}