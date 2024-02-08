import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getUsername } from "../utils/api";

export const UserComponent = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loggedInUser || !loggedInUser.username) {
      setIsLoading(false);
      return;
    }

    getUsername(loggedInUser.username)
      .then((response) => {
        setLoggedInUser(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [loggedInUser, setLoggedInUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {loggedInUser && loggedInUser.username ? (
        <>
        <p>Username: {loggedInUser.username}</p>
        <img src={loggedInUser.avatar_url} alt={`${loggedInUser.username}'s avatar image`}/>
        </>
      ) : (
        <p>No username available</p>
      )}
    </main>
  );
};
