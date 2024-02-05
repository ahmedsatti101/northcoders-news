import Header from "./Header";
import { useParams } from "react-router-dom";
import { viewSingleArticle } from "../utils/api";
import { useState, useEffect } from "react";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    viewSingleArticle(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);

  return (
    <>
      <Header />
      <ul key={article.article_id}>
        <li><strong>{article.title}</strong> - {article.body}</li>
      </ul>
    </>
  );
}
