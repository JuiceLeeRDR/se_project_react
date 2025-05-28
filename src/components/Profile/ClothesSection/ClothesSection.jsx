import "./ClothesSection.css";
// import { defaultClothingItems } from "../../../utils/constants";
import ItemCard from "../../Main/ItemCard/ItemCard";

const ClothesSection = ({ onSelectCard, clothingItems, handleAddBtnClick }) => {
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
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
