import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://portfolio-web-service-n7kk.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      return err;
    });
};
