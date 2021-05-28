import { flagLock } from '../../../resources/index';
import { Icon } from 'ebs-design';
import flag1 from '../../../resources/flag1.png';
import flag2 from '../../../resources/flag2.png';

const Congrats = () => {
  return (
    <div className="card__congratulations box-congratulation">
      <img src={flag1} alt="flag" className="flag1" />
      <img src={flag2} alt="flag" className="flag2" />

      <div className="flagLock-box">
        <span className="flagLock-content">
          <Icon className="flagLock" component={flagLock} />
        </span>
      </div>
      <h1 className="card__congratulations-title">Congratulations John,</h1>
      <p>
        You have done <span>57.6%</span> more sales today. Check your new badge in your profile.
      </p>
    </div>
  );
};
export default Congrats;
