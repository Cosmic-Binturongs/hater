import React, { useRef } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function PostComment(props) {
  let { post_id, setTogglestate } = props;
  const user = useSelector((state) => state.user);
  const commentText = useRef(null);
  let handleSubmit = (e) => {
    e.preventDefault();
    let content = commentText.current.value;
    let headerInfo = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    };
    let options = {
      method: "POST",
      headers: headerInfo,
      credentials: "include",
      body: JSON.stringify({
        content: content,
        post_id: post_id,
      }),
    };
    fetch(`http://localhost:8000/addComment`, options)
      .then((res) => res.json())
      .then(() => (commentText.current.value = ""))
      .then(() => setTogglestate((prev) => !prev))
      .catch((err) => alert(err));
  };
  return (
    <div className="comment-post-container">
      <div className="hate-profile-pic">
        <img
          src={`https://avatars.dicebear.com/api/adventurer/${user.name}.svg?flip=1`}
          alt="profile"
        ></img>
      </div>
      <div className="comment-post-field">
        <form onSubmit={handleSubmit}>
          <input placeholder=" 🗣 📠" ref={commentText} type="text" />
        </form>
      </div>
      <button onClick={handleSubmit} className="comment-button">
        <AddCommentIcon fontSize="inherit"></AddCommentIcon>
      </button>
    </div>
  );
}
