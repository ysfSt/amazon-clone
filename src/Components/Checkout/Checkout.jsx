import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";
import "./Checkout.scss";

const Checkout = () => {
  const [{ card }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {card.length === 0 ? (
          <div className="checkout__main">
            <h2 className="checkout__title">Your shopping card is empty</h2>
            <p>
              You have no items in your card. To buy one or more items, click
              "Add to card" next to the item.{" "}
            </p>
          </div>
        ) : (
          <div className="checkout__main">
            <h2 className="checkout__title">Your shopping card</h2>
            {card.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  image={item.image}
                />
              );
            })}
          </div>
        )}
      </div>
      {card.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
