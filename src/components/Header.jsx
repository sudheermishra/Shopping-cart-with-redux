import Modal from "../UI/Modal";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Container from "../UI/Container";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
function Header() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const [isModalOpen, SetModalOpen] = useState(false);
  function modalclose() {
    SetModalOpen(false);
  }
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>ARC Shop</h1>
          <button
            className={styles.showCartButton}
            onClick={() => {
              return SetModalOpen(true);
            }}>
            <span className={styles.cartIconAndNumber}>
              <BsCartFill />
              {totalQuantity > 0 && (
                <span className={styles.number}>{totalQuantity}</span>
              )}
            </span>
            <span>Cart</span>
          </button>
        </nav>
      </Container>

      {isModalOpen && (
        <Modal modalclose={modalclose}>
          <Cart />
        </Modal>
      )}
    </header>
  );
}

export default Header;
