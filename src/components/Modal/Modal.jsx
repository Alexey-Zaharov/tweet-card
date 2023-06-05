import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import Filter from "../Filter/Filter";
import FiltredCardList from "../FiltredCadrdList/FiltredCadrdList";
import { setShowModal } from "../../redux/filterSlice";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = () => {
  const dispatch = useDispatch();
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      showModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const showModal = () => {
    dispatch(setShowModal());
  };

  return createPortal(
    <div
      className={css.Overlay}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          showModal();
        }
      }}
    >
      <div className={css.Modal}>
        <Filter />
        <FiltredCardList />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
