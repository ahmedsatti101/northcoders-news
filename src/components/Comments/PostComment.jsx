import { postComment } from "../../utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function UserComment({ articleId, handleAddComment }) {
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const handleSetComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      username: loggedInUser,
      body: comment
    };

    handleAddComment(newComment.body)
    setComment("");

    try {
      await postComment(articleId, loggedInUser, comment);
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <h4>Add comment</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What are your thoughts?"
          name="comment"
          value={comment}
          onChange={handleSetComment}
        />

        <button type="submit">Post</button>
      </form>
    </>
  );
}
