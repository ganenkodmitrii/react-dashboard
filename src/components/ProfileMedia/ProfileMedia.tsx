import avatar1 from '../../resources/avatar1.jpg';

const ProfileMedia = () => {
  return (
    <div className="box-profile-media">
      <div className="media-pic">
        <img className="avatar-media" src={avatar1} alt="avatar" width="35" />
      </div>
      <div>
        <h4>John Doe (Client)</h4>
        <p>CEO of Infibeam</p>
      </div>
    </div>
  );
};
export default ProfileMedia;
