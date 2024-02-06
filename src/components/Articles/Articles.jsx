import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Articles.css";

export default function ViewArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <CardGroup>
        {articles.map((article) => {
          return (
            <Card key={article.article_id} className="articles">
              <Card.Img
                src={article.article_img_url}
                alt={`Image of ${article.title}`}
                className="article-images"
              />
              <Card.Footer>
                <Link to={`/${article.article_id}`}>{article.title}</Link>
                <Card.Text>Topic: {article.topic}</Card.Text>
                <Card.Text>Comments: {article.comment_count}</Card.Text>
              </Card.Footer>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
}
