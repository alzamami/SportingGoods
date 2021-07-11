import { useState } from "react";
import { SignupButtonStyled } from "../../styles";
import SignupModal from "../modals/SignupModal";

export const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <SignupButtonStyled onClick={openModal}>sign up</SignupButtonStyled>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
