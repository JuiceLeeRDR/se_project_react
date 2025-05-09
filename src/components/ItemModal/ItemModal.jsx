import "./ItemModal.css";
import shorts from "../../assets/shorts.png";
import modalclosebtn from "../../assets/modalclosebtn.svg";

function ItemModal({ activeModal, card, handleCloseClick }) {
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
        <img src={card.link} alt={card.name} className="item-modal__image" />
        <div className="item-modal__textbox">
          <p className="item-modal__image-caption">{card.name}</p>
          <p className="item-modal__image-caption">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
