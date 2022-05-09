import React from "react";
import Divider from "@mui/material/Divider";

export default function PostComment(props) {
  let { comment, hater_name, hater_tag } = props.hater;
  let stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };
  return (
    <>
      <div className="comment-post-container comment-mini-container">
        <div className="hate-profile-pic">
          <img
            src={`https://avatars.dicebear.com/api/adventurer/${hater_name}.svg?flip=1`}
            alt="profile"
          ></img>
        </div>
        <div className="comment-text-field">
          <p>{hater_name + "@" + hater_tag}</p>
          <h4>{comment}</h4>
        </div>
      </div>
      <Divider
        sx={{ bgcolor: stringToColor(hater_name) }}
        className="comment-divder"
      ></Divider>
    </>
  );
}
