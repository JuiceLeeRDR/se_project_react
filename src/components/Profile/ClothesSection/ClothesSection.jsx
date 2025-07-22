import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

const ClothesSection = ({
  onSelectCard,
  clothingItems,
  handleAddBtnClick,
  // currentUser,
  card,
  handleCardLike,
  isLoggedIn,
  onCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothes-section">
      <div>
        <span>Your items</span>
        <button
          className="clothes-section__add_btn"
          onClick={handleAddBtnClick}
        >
          + Add New Item
        </button>
      </div>
      <ul className="item-cards__list">
        {userItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
