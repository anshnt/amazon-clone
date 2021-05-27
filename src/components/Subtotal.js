import React from "react";
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../cart/StateProvider";
import { getBasketTotal } from "../cart/reducer";
import { useHistory } from "react-router";

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const history = useHistory()
  

  return (
    <div className="subtotal">
      <CurrencyFormat renderText={(value) => (
          <>
          <p>
              Subtotal ({basket.length} iterms):
              <strong>{value}</strong>  
        </p>
        <small className='subtotal_gift'>
            <input type='checkbox' />This order contains a gift
        </small>
       
          </>
      )} 
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'₹'}
      />
       <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
