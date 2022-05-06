import { Link } from "react-router-dom";


function Suggestion(props) {
  const { user, setProfileLink, setInputString } = props;
  const newProfileLink = "/profile/" + user.id;

  const updateProfileLink = (event) => {
    const value = event.target.innerHTML;
    console.log(value, "value")
    setProfileLink(newProfileLink);
    setInputString(value);
  }

  return (
    <div className="suggestion">
      <Link onClick={updateProfileLink} to={ newProfileLink } className="suggestion-link">
        {user.tag}
      </Link>
    </div>
  )
}

export default Suggestion;