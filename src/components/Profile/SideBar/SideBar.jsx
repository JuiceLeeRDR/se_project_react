import "./SideBar.css";
// import avatar from "../../../assets/avatar.png";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = ({
  handleLogOutBtnClick,
  handleEditProfileClick,
  // currentUser,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <div className="sidebar">
        <img
          src={currentUser?.avatar}
          alt="Default avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>{" "}
      <div className="sidebar__btns">
        <button
          className="sidebar__edit-profile__btn"
          type="button"
          onClick={handleEditProfileClick}
        >
          Change profile data
        </button>
        <button
          className="sidebar__logout__btn"
          onClick={handleLogOutBtnClick}
          type="button"
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default SideBar;
