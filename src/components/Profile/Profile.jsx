import ClothesSection from "./ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "./SideBar/SideBar";

const Profile = ({
  onSelectCard,
  clothingItems,
  handleAddBtnClick,
  handleLogOutBtnClick,
  handleEditProfileClick,
  // currentUser,
}) => {
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
        />
      </section>
    </div>
  );
};

export default Profile;
