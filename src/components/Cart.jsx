import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import styles from "./Cart.module.css";
function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  if (cart.length === 0) {
    return <h1>No Items Found!</h1>;
  }

  const totalamount = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
      <div>
        {cart.map((items) => {
          return <CartItems {...items} key={items.id} />;
        })}
      </div>
      <h1>Total Amount:&#8377;{totalamount}</h1>
    </div>
  );
}

export default Cart;
