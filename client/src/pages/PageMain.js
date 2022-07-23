import React, { useEffect, useState } from "react";
import axios from "axios";

function PageMain() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main style={{ padding: "30px", backgroundColor: "green", color: "white" }}>
      <h1>jsonplaceholder</h1>
      <br />
      <div style={{ padding: "30px", backgroundColor: "black" }}>
        <textarea
          rows={30}
          cols={100}
          value={JSON.stringify(user, null, 3)}
          readOnly={true}
        />
      </div>
    </main>
  );
}

export default PageMain;
