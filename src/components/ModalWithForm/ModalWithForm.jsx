import "./ModalWithForm.css";
import mwfclosebtn from "../../assets/mwfclosebtn.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  closeActiveModal,
  handleCloseClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
    >
      <div className="modal__container">
        <button className="modal__close-btn" onClick={handleCloseClick}>
          <img
            src={mwfclosebtn}
            alt="close button"
            className="modal__close-btn"
          />
        </button>
        <h2 className="modal__header">{title}</h2>
        <form name="new-garment" className="modal__form" noValidate>
          {children}
          <button type="submit" className="modal__save-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
