import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutButton from "./CheckoutButton";
import { fetchCartItemsNoErrors } from "../fetchers/products";

/**
 * CheckoutSummary throws a rendering error so we expect the error boundary to work
 */

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([
    // Add your cart items here
  ]);

  const handlePayClick = () => {
    // Handle the payment process here
  };

  const subtotal = cartItems.reduce(
    (sum, item: any) => sum + item.price * item.quantity,
    0
  );
  const discount = 0; // Calculate any discount here
  const total = subtotal - discount;

  useEffect(() => {
    const fetchItems = async () => {
      const items = await fetchCartItemsNoErrors();
      setCartItems(items);
    };
    fetchItems();
  }, []);

  return (
    <div className="checkout-page min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>
        <CartItems items={cartItems} />
        <CheckoutSummary
          subtotal={subtotal}
          discount={discount}
          total={total}
        />
        <div className="mt-4">
          <CheckoutButton onClick={handlePayClick} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
