import avatar1 from "../../resources/avatar1.jpg";

import handWithClock from "../../resources/hand-with-clock.jpg";

const CartProfile = () => {
    return (
        <div className="cart-profile">
            <div className="box-meetup">
                <img className="handWithClock" src={handWithClock} alt="hand with clock" />
            </div>
            <div className="box-statistic">
                <span className="box-user-foto" >
                    <img className="user-foto" src={avatar1} alt="foto man" />
                </span>
                <div className="user-statistics">
                    <h2 className="user-title">Curtis Stone</h2>
                    <p className="user-country">Malaysia</p>

                    <div className="box-level">
                        <p>Pro Level</p>
                    </div>

                </div>
                <div className="hline" ></div>
                <div className="numeral-stat">
                    <div>
                        <p className="">Followers</p>
                        <h2>10.3k</h2>
                    </div>
                    <div>
                        <p className="">Projects</p>
                        <h2>156</h2>
                    </div>
                    <div>
                        <p className="">Rank</p>
                        <h2>23</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CartProfile;