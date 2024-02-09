import axios from "axios";

export const getArticles = (topic) => {
  return axios
    .get("https://portfolio-web-service-n7kk.onrender.com/api/articles", {
      params: {
        topic
      },
    })
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
    .get(
      `https://portfolio-web-service-n7kk.onrender.com/api/users/${username}`
    )
    .then((response) => {
      return response.data.user[0];
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const getUsers = () => {
  return axios
    .get("https://portfolio-web-service-n7kk.onrender.com/api/users")
    .then((response) => {
      return response.data.users;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const postComment = (id, username, body) => {
  if (username.username === "" && body === "") {
    alert("You need to be logged in or provide a comment to post!");
    return;
  }

  return axios
    .post(
      `https://portfolio-web-service-n7kk.onrender.com/api/articles/${id}/comments`,
      { username: username.username, body: body }
    )
    .then((response) => {
      return response.data.comment[0];
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const deleteComment = (id) => {
  return axios
    .delete(
      `https://portfolio-web-service-n7kk.onrender.com/api/comments/${id}`
    )
    .then(() => {
      console.log(`Deleted comment ${id}`);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
