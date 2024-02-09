import { deleteComment } from "../../utils/api";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function DeleteCommentById({ comment, onDelete }) {
  const { loggedInUser } = useContext(UserContext);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        if (loggedInUser.username === comment.author) {
          onDelete(comment.comment_id);
          await deleteComment(comment.comment_id);
          alert("Comment deleted!");
        }
      } catch (err) {
        alert("Failed to delete the comment. Please try again.");
      }
    }
  };

  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
