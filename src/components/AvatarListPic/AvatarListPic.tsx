import photoRyanHarrington from '../../resources/avatar1.jpg';
import photoLouisaNorton from '../../resources/avatar2.jpg';
import photoJaydenDuncan from '../../resources/avatar3.jpg';
import photoCynthiaHowell from '../../resources/avatar4.jpg';
import photoHelenaPayne from '../../resources/avatar5.jpg';
const AvatarListPic = () => {
  return (
    <div className="avatar-list">
      <div className="box-avatar-pic">
        <img className="avatar-pic" src={photoRyanHarrington} alt="avatar" />
      </div>
      <div className="box-avatar-pic">
        <img className="avatar-pic" src={photoLouisaNorton} alt="avatar" />
      </div>
      <div className="box-avatar-pic">
        <img className="avatar-pic" src={photoJaydenDuncan} alt="avatar" />
      </div>
      <div className="box-avatar-pic">
        <img className="avatar-pic" src={photoCynthiaHowell} alt="avatar" />
      </div>
      <div className="box-avatar-pic">
        <img className="avatar-pic" src={photoHelenaPayne} alt="avatar" />
      </div>
    </div>
  );
};
export default AvatarListPic;
