import "./ItemModal.css";
import modalclosebtn from "../../assets/modalclosebtn.svg";

function ItemModal({
  activeModal,
  card,
  handleCloseClick,
  deleteClick,
  isOpen,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
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
          <div className="delete-btn__cntnr">
            <button onClick={deleteClick} className="item-card__delete-btn">
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
