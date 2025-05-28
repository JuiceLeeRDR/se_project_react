import "./SideBar.css";
import avatar from "../../../assets/avatar.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={avatar} alt="Default avatar" className="sidebar__avatar" />
      <p className="sidebar__username">Name of User</p>
    </div>
  );
};

export default SideBar;
