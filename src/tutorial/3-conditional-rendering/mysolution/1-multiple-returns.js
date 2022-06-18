import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/ichsnn";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        console.log(user);
        setUser(user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <>
      <div style={{marginTop: '8px'}}>
        <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: 'center' }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "75px", borderRadius: "50%" }}
          />
          <div>
            <h3>{user.login}</h3>
            <a href={user.html_url}>Profile</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleReturns;
