import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import './Articles.css'

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
      {articles.map((article) => {
        return (
          <CardGroup key={article.article_id}>
            <Card>
              <Card.Img variant="top" src={article.article_img_url} />
              <Card.Body>
                <Link to={`/${article.article_id}`}>
                  <Card.Title>{article.title}</Card.Title>
                </Link>
                <Card.Text>{article.body}</Card.Text>
              </Card.Body>
            </Card>
      </CardGroup>
        );
      })}
    </>
  );
}
