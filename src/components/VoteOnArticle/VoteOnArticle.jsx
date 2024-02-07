import { voteOnArticle } from "../../utils/api";
import { useState } from "react";
import "./VoteOnArticle.css";
import Heart from "react-animated-heart";

export default function ArticleVote({ votes, articleId }) {
  const [vote, setVote] = useState(votes);
  const [isClick, setClick] = useState(false);

  const handleVote = async (voteNum) => {
    try {
      await voteOnArticle(articleId, voteNum);
      setVote((prevVote) => prevVote + voteNum);
    } catch (err) {
      return err;
    }
  };

  const decrementVote = () => {
    handleVote(-1);
  };

  const incrementVote = () => {
    handleVote(1);
  };

  const toggleVote = () => {
    if (isClick) {
      decrementVote();
    } else {
      incrementVote();
    }
    setClick(!isClick);
  };

  return (
    <>
      <br />
      <p>Votes: {vote}</p>
      <div id="like-button"><Heart isClick={isClick} onClick={toggleVote} /></div>
    </>
  );
}
