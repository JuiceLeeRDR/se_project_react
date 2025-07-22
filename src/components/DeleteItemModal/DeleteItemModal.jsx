import "./DeleteItemModal.css";
import modalclosebtnwhite from "../../assets/modalclosebtnwhite.svg";

const DeleteItemModal = ({
  activeModal,
  // handleCloseClick,
  onDeleteItem,
  card,
}) => {
  return (
    <div
      className={`modal ${activeModal === "delete" ? "modal_opened" : ""}`}
      id="delete-modal"
    >
      <div className="delete-modal__container modal__container__delete">
        <button
          className="modal__close-button modal__close-button_delete"
          // onClick={handleCloseClick}
        >
          {" "}
          <img
            src={modalclosebtnwhite}
            alt="Modal close button"
            className="modal__close-button"
          />
        </button>
        <h2 className="modal__header modal__delete-prompt">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <form
          name="delete-form"
          className="delete__modal__buttons modal__form__delete"
          id="delete-form"
        >
          <button
            type="button"
            className="modal__button_delete"
            onClick={() => onDeleteItem(card)}
          >
            Yes, delete item
          </button>
          <button
            type="button"
            // onClick={handleCloseClick}
            className="modal__cancel-button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteItemModal;
