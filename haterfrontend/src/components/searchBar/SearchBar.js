import { useState, useEffect } from "react";
import axios from "axios";
import Suggestion from "./Suggestion.js";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./SearchBar.css";


function SearchBar() {
  const [inputString, setInputString] = useState("");
  const [users, setUsers] = useState([]);
  const [profileLink, setProfileLink] = useState("");

  useEffect(() => {
    if (!inputString) {
      setUsers([]);
      return;
    }
    const getUsers = async () => {
      const res = inputString ? await axios.get('http://127.0.0.1:8000/user_Profile/') : null;
      if(res) setUsers(res.data.filter((e) => e ? e.tag.includes(inputString) || e.name.includes(inputString) : false));
    }
    getUsers();
  })

  const updateInput = (event) => {
    setInputString(event.target.value);
  }
  
  return (
    <div className="autocomplete">
      <div className="inner-autocomplete">
      <input onChange={updateInput} />
        {users.map((user) => (<Suggestion user={user} setInputString={setInputString} setProfileLink={setProfileLink} />))}
      </div>
      <Button type="submit" variant="outlined"> <Link to={ profileLink }>Search</Link> </Button>
    </div>
  )
}

export default SearchBar;