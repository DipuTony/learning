import axios from "axios";
import React, { useState } from "react";
// import "./styles.css";

function App() {

  const [data, setData] = useState()
  const [searchKey, setSearchKey] = useState()

  const APIURL = "https://jsonplaceholder.typicode.com/users";

  const getUsers = () => {
    axios
      .get(APIURL)
      .then((res) => setData(res.data))
      .catch((err) => console.log("error ", err));
    //write code here
    //render the list of users
  };
  const sortList = () => {
    //write code here
    // on first click list will sorted in assending order
    // on second click list will be sorted in descending order
    // on third click default list will be rendered
    // on fourth click again start form step 1
  };

  console.log("Search Key is", searchKey)

  return (
    <main>
      <h1>User List</h1>
      <div>

        <input type="text" onChange={(e)=>setSearchKey(e.target.value)} className="border border-black rounded-sm" placeholder="search.." />

        <button className="border px-2 py-1" onClick={getUsers}>Get Users</button>
        <button className="border px-2 py-1" onClick={sortList}>Sort the name</button>
      </div>

      {
        data?.map((e) => (

          <ul>{e.username}</ul>
        ))

      }
    </main>
  );
}

export default App;
