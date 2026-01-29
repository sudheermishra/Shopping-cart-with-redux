import styles from "./CartItems.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {
  increaseitem,
  decreaseitem,
  deleteitem,
} from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";
function CartItems({ id, title, price, quantity, img }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartitem}>
      {/* left */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}>
          <img src={img} alt={title} className={styles.cartImage} />
        </div>
        <h3>{title}</h3>
      </div>
      {/* right */}
      <div className={styles.otherControl}>
        <div className={styles.qtyItem}>
          <button
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              dispatch(decreaseitem({ id: id }));
            }}>
            <AiOutlineMinus />
          </button>
          <span className={styles.quantityItemDisplay}>{quantity}</span>
          <button
            onClick={() => {
              dispatch(increaseitem({ id: id }));
            }}>
            <AiOutlinePlus />
          </button>
        </div>
        <p>&#8377;{price * quantity}</p>
        <button
          className={styles.removeitem}
          onClick={() => {
            dispatch(deleteitem({ id: id }));
          }}>
          <ImCross />
        </button>
      </div>
    </div>
  );
}

export default CartItems;

{
  /* old */
}
// <p>title:{title}</p>
//     <p>id:{id}</p>
//     <p>
//       price: {price} * {quantity} = {price * quantity}
//     </p>
//     <p>quantity:{quantity}</p>
//     <button>Increase quantity</button>
//     <button>Decrease quantity</button>
//     <button>Delete item</button>
