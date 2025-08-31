import { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutButton from "../components/CheckoutButton";
import { fetchCartItems, fetchCartItemsNoErrors } from "../fetchers/products";
import { useErrorBoundary } from "react-error-boundary";

/**
 * By using react-error-boundary we get access to useErrorBoundary hook which returns a setter fn we can use it to pass 
 * the error to the boundary instead if internally handle the the error with a state.
 */

export const UsingTheRightWay = () => {
  const [cartItems, setCartItems] = useState([]);

  //✅ The Special hook you need
  const { showBoundary } = useErrorBoundary();

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
      try {
        const items = await fetchCartItems();
        // const items = await fetchCartItemsNoErrors();
        setCartItems(items);
      } catch (err) {
        //pass the error to this fn so error boundary component can work.
        showBoundary(err);
      }
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
