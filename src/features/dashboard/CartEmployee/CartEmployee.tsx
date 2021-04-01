import avatar1 from '../../../resources/avatar1.jpg';
import avatar2 from '../../../resources/avatar2.jpg';
import avatar3 from '../../../resources/avatar3.jpg';
import avatar4 from '../../../resources/avatar4.jpg';
import avatar5 from '../../../resources/avatar5.jpg';
import Recharts from '../../../components/Recharts/Recharts';
const CartEmployee = () => {
  return (
    <div className="card-employee">
      <h2 className="title-employee">Employee Task</h2>
      <div className="cart-statist">
        <div className="cart-avatar">
          <img className="avatar" src={avatar1} alt="avatar" width="42" />
          <div className="avatar-info">
            <h4>Ryan Harrington</h4>
            <p>iOS Developer</p>
          </div>
        </div>

        <div className="cart-recharts">
          <p>9hr 20m</p>
          <Recharts />
        </div>
      </div>
      <div className="cart-statist">
        <div className="cart-avatar">
          <img className="avatar" src={avatar2} alt="avatar" width="42" />
          <div className="avatar-info">
            <h4>Louisa Norton</h4>
            <p>UI Designer</p>
          </div>
        </div>
        <div className="cart-recharts">
          <p>4hr 17m</p>
          <Recharts />
        </div>
      </div>
      <div className="cart-statist">
        <div className="cart-avatar">
          <img className="avatar" src={avatar3} alt="avatar" width="42" />
          <div className="avatar-info">
            <h4>Jayden Duncan</h4>
            <p>Java Developer</p>
          </div>
        </div>
        <div className="cart-recharts">
          <p>12hr 8m</p>
          <Recharts />
        </div>
      </div>
      <div className="cart-statist">
        <div className="cart-avatar">
          <img className="avatar" src={avatar4} alt="avatar" width="42" />
          <div className="avatar-info">
            <h4>Cynthia Howell</h4>
            <p>Anguler Developer</p>
          </div>
        </div>
        <div className="cart-recharts">
          <p>3hr 19m</p>
          <Recharts />
        </div>
      </div>
      <div className="cart-statist">
        <div className="cart-avatar">
          <img className="avatar" src={avatar2} alt="avatar" width="42" />
          <div className="avatar-info">
            <h4>Helena Payne</h4>
            <p>Marketing</p>
          </div>
        </div>
        <div className="cart-recharts">
          <p>9hr 50m</p>
          <Recharts />
        </div>
      </div>
      <div className="cart-statist">
        <div className="cart-avatar">
          <img className="avatar" src={avatar5} alt="avatar" width="42" />
          <div className="avatar-info">
            <h4>Troy Jensen</h4>
            <p>iOS Developer</p>
          </div>
        </div>
        <div className="cart-recharts">
          <p>4hr 48m</p>
          <Recharts />
        </div>
      </div>
    </div>
  );
};
export default CartEmployee;
