import { DeleteButtonStyled } from "../../styles";

export const DeleteButton = (props) => {
  const handleDelete = () => {
    props.productDelete(props.productId);
    props.setProduct(null);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};
