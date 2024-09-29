import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

import { deleteContact } from "../../redux/contacts/operations";
import { editCurrenItem } from "../../redux/contacts/slice";

import css from "./Contact.module.css";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  const [modalisOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = () => {
    dispatch(editCurrenItem(item));
  };

  const handleDelete = () => {
    toast.promise(dispatch(deleteContact(item.id)), {
      loading: "Deleting...",
      success: <b>Contact deleted!</b>,
      duration: 5000,
    });
    closeModal();
  };
  return (
    <div className={css.contactWrap}>
      <ul className={css.contactList}>
        <li className={css.contactItem}>
          <FaUser className={css.itemIcon} />
          <p className={css.itemText}>{item.name}</p>
        </li>
        <li className={css.contactItem}>
          <FaPhone className={css.itemIcon} />{" "}
          <p className={css.itemText}>{item.number}</p>
        </li>
      </ul>
      <ul className={css.btnsList}>
        <li className={css.btnListItem}>
          <button
            className={css.contactBtnEdit}
            type="button"
            onClick={handleChange}
          >
            <CiEdit className={css.icon} /> Edit
          </button>
        </li>
        <li className={css.btnListItem}>
          <button className={css.contactBtnDelete} onClick={openModal}>
            <MdDelete className={css.icon} />
            Delete
          </button>
        </li>
      </ul>

      <Modal
        isOpen={modalisOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className={css.btnClose} onClick={closeModal}>
          <IoMdCloseCircle />
        </button>
        <p className={css.textModal}>
          {" "}
          Are you sure you want to delete this Contact?
        </p>
        <ul className={css.modalBtnsList}>
          <li className={css.modulBtnsItem}>
            <button className={css.btnYes} onClick={handleDelete}>
              Yes
            </button>
          </li>
          <li className={css.modulBtnsItem}>
            <button className={css.btnNo} onClick={closeModal}>
              No
            </button>
          </li>
        </ul>
      </Modal>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
