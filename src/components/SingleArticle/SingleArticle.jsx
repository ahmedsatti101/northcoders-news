import Header from "../Header";
import { useParams } from "react-router-dom";
import { viewSingleArticle, getComments } from "../../utils/api";
import { useState, useEffect } from "react";
import "./SingleArticle.css";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const articleDate = new Date(article.created_at).toString();

  useEffect(() => {
    viewSingleArticle(article_id)
      .then((response) => {
        setArticle(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
      
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
      <Header />
      <br />
      <h3>Author: {article.author}</h3>
      <main>
        <h2>{article.title}</h2>
        <article>{article.body}</article>
      </main>
      <details>
        <p>Votes: {article.votes}</p>
        <p>Posted: {articleDate}</p>
      </details>
      <br />
      <p>Comments ({article.comment_count}):</p>
      <ul className="comments">
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
      </ul>
    </>
  );
}
