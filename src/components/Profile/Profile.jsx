import ClothesSection from "./ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "./SideBar/SideBar";

const Profile = ({ onSelectCard, clothingItems, handleAddBtnClick }) => {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onSelectCard={onSelectCard}
          clothingItems={clothingItems}
          handleAddBtnClick={handleAddBtnClick}
        />
      </section>
    </div>
  );
};

export default Profile;
