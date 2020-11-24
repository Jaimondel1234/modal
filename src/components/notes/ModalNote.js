import React from "react";
import Modal from "react-modal";
import { TextStyle, InputStyle } from "../../styles/core";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ModalNoteInputs } from "./ModalNoteInputs";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    padding: "50px",
  },
};

/** Style of modal input */
const ModalInputStyle = styled(InputStyle)`
  border-radius: 7px;
  font-size: 30px;
  margin-bottom: 20px;
  width: 95%;
  padding: 15px;
  padding-left: 25px;
`;

/**
 * Component of modal to create or update a note
 */
export const ModalNote = () => {
  Modal.setAppElement("#root");
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeNote } = useSelector((state) => state.notes);

  return (
    <Modal
      isOpen={modalOpen}
      style={customStyles}
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <TextStyle fontSize='60px' fontWeight='bold' textAlign='center'>
        {activeNote ? "Change your Note" : "Create your Note"}
      </TextStyle>
      <hr />
      <ModalNoteInputs />
    </Modal>
  );
};
