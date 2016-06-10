import React, { PropTypes } from 'react'

const ProfileLeft = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile-pic">
        <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
      </div>
      <div className="profile-info">
        <span>Welcome,</span>
        <h2>{user.name}</h2>
      </div>
    </div>
  )
}

ProfileLeft.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}
export default ProfileLeft
