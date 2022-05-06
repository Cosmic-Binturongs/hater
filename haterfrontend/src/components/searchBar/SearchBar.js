import { useState, useEffect } from "react";
import axios from "axios";


function SearchBar() {
  const [inputString, setInputString] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!inputString) {
      setUsers([]);
      return;
    }
    const getUsers = async () => {
      const res = inputString ? await axios.get('http://127.0.0.1:8000/user_Profile/') : null;
      if(res) setUsers(res.data.filter((e) => e ? e.name.includes(inputString) : false));
    }
    getUsers();
  })

  const updateInput = (event) => {
    setInputString(event.target.value);
  }
  
  return (
    <div className="autocomplete">
      <input onChange={updateInput} />
      {users.map((user) => (<div>{user.name}</div>))}
    </div>
  )
}

export default SearchBar;