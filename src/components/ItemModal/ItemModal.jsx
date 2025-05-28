import "./ItemModal.css";
import shorts from "../../assets/shorts.png";
import modalclosebtn from "../../assets/modalclosebtn.svg";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";

function ItemModal({
  activeModal,
  card,
  handleCloseClick,
  handleDeleteBtnClick,
  deleteClick,
  onDeleteItem,
}) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
      id="preview-item-modal"
    >
      <div className="item-modal__content">
        <button
          onClick={handleCloseClick}
          className="item-modal__close-button"
          type="button"
        >
          <img
            src={modalclosebtn}
            alt="Modal close button"
            className="item-modal__close-button"
          />
        </button>
        <img
          src={card.imageUrl}
          alt={card.name}
          className="item-modal__image"
        />
        <div className="item-modal__textbox">
          <p className="item-modal__image-caption">{card.name}</p>
          <p className="item-modal__image-caption">
            Weather: {card.weatherType}
          </p>
          <button onClick={deleteClick} className="item-card__delete-btn">
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
