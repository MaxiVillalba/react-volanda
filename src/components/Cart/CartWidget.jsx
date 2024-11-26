import React, { useContext } from "react";
import { TfiShoppingCart } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      className="cartwidget"
      onClick={() => navigate("/cart")}
      style={{ cursor: "pointer" }}
    >
      <TfiShoppingCart className="icon-cart" color="grey" />
      {totalItems() > 0 && <p>{totalItems()}</p>}
    </div>
  );
};

export default CartWidget;
