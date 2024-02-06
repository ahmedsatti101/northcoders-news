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

export const viewSingleArticle = (id) => {
  let str = `https://portfolio-web-service-n7kk.onrender.com/api/articles`;

  if (id) {
    str += `/${id}`;
    return axios
      .get(str)
      .then((response) => {
        return response.data.article[0];
      })
      .catch((err) => {
        return err;
      });
  } else {
    return axios
      .get(str)
      .then((response) => {
        return response.data.articles;
      })
      .catch((err) => {
        return err;
      });
  }
};

export const getComments = (id) => {
  return axios
    .get(
      `https://portfolio-web-service-n7kk.onrender.com/api/articles/${id}/comments`
    )
    .then((response) => {
      return response.data.comments;
    })
    .catch((err) => {
      return err;
    });
};
