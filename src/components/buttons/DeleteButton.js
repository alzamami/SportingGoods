import productStore from "../../stores/productStore";
import { DeleteButtonStyled } from "../../styles";

export const DeleteButton = (props) => {
  const handleDelete = () => {
    productStore.productDelete(props.productId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};
