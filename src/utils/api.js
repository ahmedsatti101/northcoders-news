import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://portfolio-web-service-n7kk.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const getSingleArticle = (id) => {
  let str = `https://portfolio-web-service-n7kk.onrender.com/api/articles`;

  if (id) {
    str += `/${id}`;
    return axios
      .get(str)
      .then((response) => {
        return response.data.article[0];
      })
      .catch((err) => {
        return err.response.data;
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
      return err.response.data;
    });
};

export const voteOnArticle = (id, votes) => {
  return axios
    .patch(
      `https://portfolio-web-service-n7kk.onrender.com/api/articles/${id}`,
      { inc_votes: votes }
    )
    .then((response) => {
      return response.data.votes;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const getUsername = (username) => {
  return axios
  .get(`/api/users/${username}`)
  .then((response) => {
    return response.data.user
  })
  .catch((err) => {
    return err.response.data
  })
};
