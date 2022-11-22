import React, { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { userContext } from "../../context";
import UserSingle from "../Main/UserSingle";
import ClipLoader from "react-spinners/ClipLoader";

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
        {users ? (
          users
            ?.filter((elem) => elem.id != userId)
            .map((element) => (
              <UserSingle
                key={element.id}
                contactId={element.id}
                name={element.name}
                firstName={element.firstName}
              />
            ))
        ) : (
          <ClipLoader
            color="#1056e2"
            //loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
    </div>
  );
}

export default Users;
