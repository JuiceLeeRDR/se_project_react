import ClothesSection from "./ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Profile = ({
  onSelectCard,
  clothingItems,
  handleAddBtnClick,
  handleLogOutBtnClick,
  handleEditProfileClick,
  isLoggedIn,
  onCardLike,
  // currentUser,
}) => {
  const currentUser = useContext(CurrentUserContext);
  // if (!currentUser) return null;
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleLogOutBtnClick={handleLogOutBtnClick}
          handleEditProfileClick={handleEditProfileClick}
          // currentUser={currentUser}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onSelectCard={onSelectCard}
          clothingItems={clothingItems}
          handleAddBtnClick={handleAddBtnClick}
          // currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
};

export default Profile;
