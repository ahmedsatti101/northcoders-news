import { useParams } from "react-router-dom";
import { getSingleArticle } from "../../utils/api";
import { useState, useEffect } from "react";
import "./SingleArticle.css";
import CommentsList from ".././Comments/CommentsList";
import ArticleVote from "../VoteOnArticle/VoteOnArticle";
import "../VoteOnArticle/VoteOnArticle.css";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const articleDate = new Date(article.created_at).toString();

  useEffect(() => {
    getSingleArticle(article_id)
      .then((response) => {
        setArticle(response);
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
      <br />
      <h3>Author: {article.author}</h3>
      <main>
        <h2>{article.title}</h2>
        <article>{article.body}</article>
        <ArticleVote votes={article.votes} articleId={article.article_id} />
      </main>
      <details>
        <p>Votes: {article.votes}</p>
        <p>Posted: {articleDate}</p>
      </details>
      <br />
      <CommentsList />
    </>
  );
}
