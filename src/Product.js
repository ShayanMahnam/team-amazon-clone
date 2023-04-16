import "./Product.css";
function Product({ id, title, price, rating, image }) {
  return (
    <div className="product-container">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="star">⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
