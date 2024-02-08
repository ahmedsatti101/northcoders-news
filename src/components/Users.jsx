import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const { setLoggedInUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
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
      <ul>
        {users.map((user) => {
          return (
            <li key={user.username}>
              {user.username}
              <Link to={`/users/${user.username}`} onClick={() => setLoggedInUser(user)}>Login</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
