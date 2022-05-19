import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/profile-image.jpg";

function Profile(props) {
  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
    <div className="false-stuffed">
      <div
        className="preview-card__image js__profile-image"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
