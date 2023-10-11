import Comment from "./Comment";

export default function NewAddedComment({ username, content, image, time, score }) {
  return (
    <div className="AddedComment">
        {/* Display the added comment */}
        <Comment
          username={username}
          content={content}
          image={image}
          time={time}
          score={score}
        />
    </div>
  );
}
