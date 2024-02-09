import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Articles.css";
import SortArticles from "../SortBy";

export default function ViewArticles() {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
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
      <SortArticles />
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
                <Link to={`articles/${article.article_id}`}>
                  {article.title}
                </Link>
                <Card.Text>
                  Topic:{" "}
                  <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
                </Card.Text>
                <Card.Text>Comments: {article.comment_count}</Card.Text>
              </Card.Footer>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
}
