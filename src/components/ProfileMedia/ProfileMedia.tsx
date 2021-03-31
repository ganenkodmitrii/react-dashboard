import profileImage from '../../resources/avatar1.jpg';

const ProfileMedia = () => {
  return (
    <div className="box-profile-media">
      <div className="box-profile-img">
        <img className="profile-img" src={profileImage} alt="profile John Doe" />
      </div>
      <div>
        <h4>John Doe (Client)</h4>
        <p>CEO of Infibeam</p>
      </div>
    </div>
  );
};
export default ProfileMedia;
