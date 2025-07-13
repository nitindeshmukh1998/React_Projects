const ItemCards = (props) => {
  const {
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
    dishPrice,
    rating,
  } = props;
  return (
    <div className="item-cards">
      <img src={strCategoryThumb} alt="item" />

      <div className="item-details">
        <p>{strCategoryDescription}</p>
        <h6>Rating:{rating}</h6>
        <h6>{strCategory}</h6>
        <h4>{`RS. ${dishPrice}`}</h4>
        <button>Add To CART</button>
      </div>
    </div>
  );
};
export default ItemCards;
