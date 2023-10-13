import Comment from "./Comment";
import data from "./data.json";
import ReplyComment from "./ReplyComment";
import './CommentList.css';
import AddComment from "./AddComment";
import { useState } from "react";

export default function CommentList() {
    // Extract the comments array from the JSON data
    const { comments } = data;

    // Initialize state for managing comments
    const [commentData, setCommentData] = useState(comments);

    // this function creates a new comment
    const addComment = (commentText) => {
        const newComment = {
            id: commentData.length + 1,
            user: {
                username: 'juliusomo',
                image: {
                    png: 'avatars/image-juliusomo.png',
                    webp: 'avatars/image-juliusomo.webp',
                },
            },
            content: commentText,
            createdAt: new Date().toDateString(),
            score: 0,
            replies: [],
        };

        // add new comment to the array of comments
        setCommentData([...commentData, newComment]);
    };

    const addReplyToComment = (commentId, reply) => {
        const updatedComments = commentData.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    replies: [...comment.replies, reply],
                };
            }
            return comment;
        });

        setCommentData(updatedComments);
    };

    return (
        <div className="CommentList">
            {commentData.map((comment) => (
                <div className="comment-component">
                    <Comment
                        key={comment.id}
                        username={comment.user.username}
                        content={comment.content}
                        image={comment.user.image.png}
                        time={comment.createdAt}
                        score={comment.score}
                        addReplyToComment={addReplyToComment}
                        id={comment.id}
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

            <AddComment onAddComment={addComment} />
        </div>
    )
}