import { useDispatch, useSelector } from "react-redux";
import styles from "./product.module.css";
import { toast } from "react-toastify";
import { addItemToCart } from "../features/cart/CartSlice";
function Product({ id, title, price, img }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  function handleAdd() {
    for (let item of cart) {
      if (item.id === id) {
        toast.error("item already added to cart");
        return;
      }
    }
    const newCartItem = {
      id: id,
      img: img,
      title: title,
      price: price,
      quantity: 1,
    };
    // dispatch({
    //   type: "ADD_ITEM",
    //   payload: newCartItem,
    // });
    dispatch(addItemToCart(newCartItem));
    toast.info("item added to cart");
  }
  return (
    <div className={styles.product}>
      <img className={styles.productImage} src={img} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}> &#8377;{price}</p>
      <button className={styles.addToCartbtn} onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
