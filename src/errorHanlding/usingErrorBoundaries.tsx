import { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutButton from "../components/CheckoutButton";
import { fetchCartItems } from "../fetchers/products";

/**
 * Component that fetch and display data.
 * IF fetching error happens in this component it won't be handled with the boundary 
 */

export const UsingErrorBoundaries = () => {
  const [cartItems, setCartItems] = useState([]);

  const handlePayClick = () => {
    // Handle the payment process here
  };

  const subtotal = cartItems.reduce(
    (sum, item: any) => sum + item.price * item.quantity,
    0
  );
  const discount = 0;
  const total = subtotal - discount;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (err) {}
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
