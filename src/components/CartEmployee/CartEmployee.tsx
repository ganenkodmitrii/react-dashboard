import photoRyanHarrington from '../../resources/avatar1.jpg';
import photoLouisaNorton from '../../resources/avatar2.jpg';
import photoJaydenDuncan from '../../resources/avatar3.jpg';
import photoCynthiaHowell from '../../resources/avatar4.jpg';
import photoHelenaPayne from '../../resources/avatar5.jpg';
import Recharts from '../Recharts/Recharts';
const CartEmployee = () => {
  return (
    <div className="card-employee">
      <h2 className="title-employee">Employee Task</h2>
      <div className="cart-statist">
        <div className="cart-avatar">
          <img className="avatar" src={photoRyanHarrington} alt="avatar Ryan Harrington" />
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
          <img className="avatar" src={photoLouisaNorton} alt="avatar Louisa Norton" />
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
          <img className="avatar" src={photoJaydenDuncan} alt="avatar Jayden Duncan" />
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
          <img className="avatar" src={photoCynthiaHowell} alt="avatar Cynthia Howell" />
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
          <img className="avatar" src={photoHelenaPayne} alt="avatar Helena Payne" />
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
          <img className="avatar" src={photoJaydenDuncan} alt="avatar Troy Jensen" />
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
