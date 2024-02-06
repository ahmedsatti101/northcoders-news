import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { useState, useEffect } from "react";
import "../components/SingleArticle/SingleArticle.css";

export default function CommentsList() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
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
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <p>Comments:</p>
      <section className="comments">
        {comments.map((comment) => {
          const date = new Date(comment.created_at).toString();
          return (
            <>
              <p className="comment-author">{comment.author}</p>
              <p className="comment-body">{comment.body}</p>
              <details>
                <p>Votes: {comment.votes}</p>
                <p>Posted: {date}</p>
              </details>
            </>
          );
        })}
      </section>
    </>
  );
}
