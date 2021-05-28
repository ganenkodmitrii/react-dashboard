import { medal } from 'resources';
import { Icon, Button } from 'ebs-design';

const CartPrize = () => {
  return (
    <div className="box-congratulation card-prize">
      <Icon className="prize-medal" component={medal} />
      <h3 className="prize-title">Congratulations 🎉 John!</h3>
      <p className="prize-text">You have won gold medal</p>
      <h2 className="prize-currency">$48.9k</h2>
      <Button className="prize-button" type="primary">
        View Sales
      </Button>
    </div>
  );
};
export default CartPrize;
