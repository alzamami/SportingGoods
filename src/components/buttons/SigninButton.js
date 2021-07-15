import { useState } from "react";
import { SignupButtonStyled } from "../../styles";
import SigninModal from "../modals/SigninModal";

export const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <SignupButtonStyled onClick={openModal}>Sign in </SignupButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
