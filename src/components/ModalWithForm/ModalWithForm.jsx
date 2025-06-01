import "./ModalWithForm.css";
import mwfclosebtn from "../../assets/mwfclosebtn.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  handleCloseClick,
  isOpen,
  name,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close-btn" onClick={handleCloseClick}>
          <img
            src={mwfclosebtn}
            alt="close button"
            className="modal__close-btn"
          />
        </button>
        <h2 className="modal__header">{title}</h2>
        <form
          onSubmit={onSubmit}
          name={name}
          className="modal__form"
          noValidate
        >
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
