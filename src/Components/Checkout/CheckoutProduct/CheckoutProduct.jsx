import React from "react";
import "./CheckoutProduct.scss";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import { useStateValue } from "../../StateProvider/StateProvider";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [, dispatch] = useStateValue();
  const removeFromCard = () => {
    dispatch({
      type: "REMOVE_FROM_CARD",
      item: {
        id,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="" />
      <div className="checkoutProduct__info">
        <h4 className="checkoutProduct__title">{title}</h4>
        <p className="checkoutProduct__price">
          <strong>${price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRoundedIcon className="starIcon" />
            ))}
          <StarHalfRoundedIcon className="starIcon" />
        </div>
        <button className="checkoutProduct__button" onClick={removeFromCard}>
          <AddShoppingCartRoundedIcon className="addCardIcon" />
          Remove from card
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
