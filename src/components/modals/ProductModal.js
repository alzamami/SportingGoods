import { useState } from "react";
import Modal from "react-modal";
import productStore from "../../stores/productStore";

const ProductModal = (props) => {
  const [product, setProduct] = useState(
    props.oldProduct
      ? props.oldProduct
      : {
          name: "",
          price: 0,
          description: "",
          image: "",
        }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
  };

  const handleSumbit = (event) => {
    event.preventDefault();

    props.oldProduct
      ? productStore.updateProduct(product)
      : productStore.createProduct(product, props.store);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSumbit}>
          <div className="row">
            <div className="col">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="name"
                value={product.name}
              />
            </div>
            <div className="col">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                min="1"
                name="price"
                onChange={handleChange}
                value={product.price}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={handleChange}
              value={product.description}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleImage}
            />
          </div>
          <button type="submit">{props.oldProduct ? "Update" : "Add"}</button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductModal;
