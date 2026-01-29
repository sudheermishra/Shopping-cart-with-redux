import Header from "./components/Header";
import Products from "./components/Products";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer
          position="bottom-right"
          newestOnTop={true}
          autoClose={600}
          hideProgressBar={true}
        />
        <Header />
        <Products />
      </Provider>
    </>
  );
}

export default App;
