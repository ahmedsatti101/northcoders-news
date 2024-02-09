import { useParams } from "react-router-dom";
import { getComments, postComment } from "../../utils/api";
import { useState, useEffect, useContext } from "react";
import "../../components/SingleArticle/SingleArticle.css";
import { UserContext } from "../../contexts/UserContext";
import UserComment from "./PostComment";
import DeleteCommentById from "./DeleteComment";

export default function CommentsList() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const { loggedInUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getComments(article_id)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddComment = async (comment) => {
    try {
      const newComment = await postComment(article_id, loggedInUser, comment);
      setComments((prevComments) => [newComment, ...prevComments]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== commentId)
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <UserComment articleId={article_id} handleAddComment={handleAddComment} />
      <br />
      <p>Comments:</p>
      {comments.map((comment) => {
        const date = new Date(comment.created_at).toString();
        return (
          <section className="comments" key={comment.comment_id}>
            <p className="comment-author">{comment.author}</p>
            <p className="comment-body">{comment.body}</p>
            {loggedInUser.username === comment.author && (
              <DeleteCommentById
                comment={comment}
                onDelete={handleDeleteComment}
              />
            )}
            <details>
              <p>Votes: {comment.votes}</p>
              <p>Posted: {date}</p>
            </details>
          </section>
        );
      })}
    </>
  );
}
