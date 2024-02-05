import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import './Articles.css'

export default function ViewArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  });

  return (
    <>
      {articles.map((article) => {
        return (
          <ul key={article.article_id} className="article-list">
            <li>
              <strong>{article.title}</strong> - {article.body}
            </li>
          </ul>
        );
      })}
    </>
  );
}
