import React from "react";
import "./Product.scss";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";

const Product = ({ id, title, rating, price, image }) => {
  
  return (
    <div className="product">
      <div className="product__info">
        <h4>{title.length > 60 ? `${title.substring(0, 60)}...` : title}</h4>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRoundedIcon className="starIcon" />
            ))}
          <StarHalfRoundedIcon className="starIcon" />
        </div>
      </div>

      <img src={image} className="product__image" alt="" />
      <button className="product__button" >
        <AddShoppingCartRoundedIcon className="addCardIcon" />
        Add to card
      </button>
    </div>
  );
};

export default Product;
