import "./ItemModal.css";
import modalclosebtn from "../../assets/modalclosebtn.svg";

function ItemModal({
  card,
  handleCloseClick,
  deleteClick,
  isOpen,
  isLoggedIn,
  currentUser,
}) {
  const isOwn = card.owner === currentUser._id;

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
          <p className="item-modal__image-caption">Weather: {card.weather}</p>
          <div className="delete-btn__cntnr">
            {isOwn && isLoggedIn && (
              <button className="item-card__delete-btn" onClick={deleteClick}>
                Delete item
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
