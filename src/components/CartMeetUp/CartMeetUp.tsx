import { Icon } from '@ebs-integrator/react-ebs-ui';
import AvatarListPic from '../AvatarListPic/AvatarListPic';
import { geolocation, calendar } from '../../resources/index';

const CartMeetUp = () => {
  return (
    <div className="cart-meetup">
      <div className="box-meetup">
        <img
          className="meetup"
          src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/email.de935b8f.svg"
          alt="Girl in a jacket"
        />
      </div>
      <div className="nodebook-box">
        <div className="notebook-info">
          <div className="notebook-date">
            <h4>THU</h4>
            <h2>24</h2>
          </div>
          <div>
            <h2 className="notebook-title">Developer Meetup</h2>
            <p>Meet world popular developers</p>
          </div>
        </div>
        <div className="notebook-calendar">
          <div className="notebook-icon">
            <Icon className="calendar" component={calendar} />
          </div>
          <div>
            <h4>Sat, May 25, 2020</h4>
            <p>10:AM to 6:PM</p>
          </div>
        </div>
        <div className="notebook-location">
          <div className="notebook-icon">
            <Icon className="" component={geolocation} />
          </div>
          <div>
            <h4>Central Park</h4>
            <p>Manhattan, New york City</p>
          </div>
        </div>
        <div className="notebook-pic">
          <AvatarListPic />
          <h3 className="number-pic">+42</h3>
        </div>
      </div>
    </div>
  );
};
export default CartMeetUp;
