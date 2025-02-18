import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/index";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card p-3 mt-4">
      <h4>User List</h4>
      <ul className="list-group">
        {data.users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
