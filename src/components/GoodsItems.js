const GoodsItems = (props) => {
  return (
    <div className="productIMG" id={props.id}>
      <img alt={props.name} src={props.image} className="UEFABall" />
      <p className="text">{props.name}</p>
      <p className="text">{props.price} KD</p>
    </div>
  );
};

export default GoodsItems;
