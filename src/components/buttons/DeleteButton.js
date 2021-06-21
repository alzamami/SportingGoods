import { DeleteButtonStyled } from "../../styles";

export const DeleteButton = (props) => {
  const handleDelete = () => {
    props.productDelete(props.productId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};
