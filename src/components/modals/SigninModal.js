import { useState } from "react";
import Modal from "react-modal";
import authStore from "../../stores/authStore";

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

const SigninModal = (props) => {
  const [user, setUser] = useState(
    props.oldProduct
      ? props.oldProduct
      : {
          username: "",
          password: "",
        }
  );

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Signup Modal"
        style={customStyles}
      >
        <form onSubmit={handleSumbit}>
          <div className="row">
            <div className="col">
              <label className="form-label">UserName</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="username"
              />
            </div>
            <div className="col">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">Sign in</button>
        </form>
      </Modal>
    </div>
  );
};

export default SigninModal;
