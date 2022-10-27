import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { userContext } from "../../context";
import UserSingle from "../Main/UserSingle";

function Users() {
  const [users, setUsers] = useState();
  const { token, userId } = useContext(userContext);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/main/users`,
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      setUsers(response.data);
    });
  }, [token]);

  return (
    <div>
      <div className="contact">
        <div className="contact_title">Contacts</div>
        {users &&
          users
            ?.filter((elem) => elem.id != userId)
            .map((element) => (
              <UserSingle
                key={element._id}
                id={element._id}
                name={element.name}
                lastName={element.lastName}
              />
            ))}
      </div>
    </div>
  );
}

export default Users;
