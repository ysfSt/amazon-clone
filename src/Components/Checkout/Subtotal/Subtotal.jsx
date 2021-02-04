import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import { getCardTotal } from "../../../reducer";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.scss";

const Subtotal = () => {
  const [{ card }, dispatch] = useStateValue();
  const val = getCardTotal(card);
  console.log(val);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({card.length} items) : <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order is contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={val}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
