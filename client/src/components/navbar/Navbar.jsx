import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Settings from "../../img/settings.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama App</span>
      <div className="icons">
        <div className="icon">
          <img src={Notification} className="iconImg" alt="notification" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Message} className="iconImg" alt="notification" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Settings} className="iconImg" alt="notification" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
