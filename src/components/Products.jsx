import Product from "./Product";
import { products } from "../data/products";
import styles from "./Products.module.css";
import Container from "../UI/Container";
function Products() {
  return (
    <Container>
      <h1>Best Of ARC</h1>
      <div className={styles.products}>
        {products.map((data) => {
          return <Product key={data.id} {...data} />;
        })}
      </div>
    </Container>
  );
}

export default Products;
