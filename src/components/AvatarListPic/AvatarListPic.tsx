import avatar1 from '../../resources/avatar1.jpg';
import avatar2 from '../../resources/avatar2.jpg';
import avatar3 from '../../resources/avatar3.jpg';
import avatar4 from '../../resources/avatar4.jpg';
import avatar5 from '../../resources/avatar5.jpg';

const AvatarListPic = () => {
  return (
    <div className="avatar-list">
      <div className="box-pic">
        <img className="avatar-pic" src={avatar1} alt="avatar" width="33" />
      </div>
      <div className="box-pic">
        <img className="avatar-pic" src={avatar2} alt="avatar" width="33" />
      </div>
      <div className="box-pic">
        <img className="avatar-pic" src={avatar3} alt="avatar" width="33" />
      </div>
      <div className="box-pic">
        <img className="avatar-pic" src={avatar4} alt="avatar" width="33" />
      </div>
      <div className="box-pic">
        <img className="avatar-pic" src={avatar5} alt="avatar" width="33" />
      </div>
    </div>
  );
};
export default AvatarListPic;
