import { voteOnArticle } from "../../utils/api";
import { useState, useEffect } from "react";
import "./VoteOnArticle.css";
import Heart from "react-animated-heart";

export default function ArticleVote({ votes, articleId }) {
  const [vote, setVote] = useState(votes || 0);
  const [isClick, setClick] = useState(false);

  useEffect(() => {
    if (vote !== null) {
      voteOnArticle(articleId, vote)
        .then((response) => {
          setVote(response);
        })
        .catch((err) => {
          return err;
        });
    }
  }, [articleId, vote]);

  const decrementVote = () => {
    setVote((prevVote) => prevVote - 1);
  };

  const incrementVote = () => {
    setVote((prevVote) => prevVote + 1);
  };

  return (
    <>
      <button onClick={incrementVote}>+</button>
      <button onClick={decrementVote}>-</button>
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </>
  );
}
