# 🛒 Redux-Toolkit-Cart

A Cart Application built with **React + Vite** that demonstrates my understanding of **Redux Toolkit** for global state management.

🔗 **Live Demo:** [https://vite-redux-cartapp.netlify.app/](https://vite-redux-cartapp.netlify.app/)

---




## 📌 About the Project

This project shows how Redux Toolkit simplifies state management in React applications. It includes a product listing page where users can add items to a cart, view cart totals, and get instant feedback through toast notifications.

---

## ✨ Features

- ➕ Add items to cart
- ➖ Remove items from cart
- 🔢 Update item quantity
- 💰 Real-time cart total calculation
- 🔔 Toast notifications on add/remove
- 📱 Responsive UI

---

## 🛠️ Tech Stack

| Technology | Use |
|------------|-----|
| React | UI components |
| Vite | Fast development build tool |
| Redux Toolkit | Global state management |
| React Redux | Connect React with Redux |
| React Toastify | Toast notifications |
| React Icons | Icons throughout the app |
| HTML & CSS | Structure and styling |
| JavaScript | Logic |

---

## 📁 Project Structure

```
redux-toolkit-cart/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Shows cart item count
│   │   ├── ProductCard.jsx   # Individual product with Add to Cart button
│   │   └── Cart.jsx          # Cart page with items and total
│   ├── store/
│   │   ├── store.js          # Redux store configuration
│   │   └── cartSlice.js      # Cart slice with actions and reducers
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Redux Flow

```
User clicks "Add to Cart"
        ↓
Dispatch Action (addToCart)
        ↓
Reducer updates the store
        ↓
All components re-render with new state
        ↓
Toast notification shown
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sudheermishra/Redux-Toolkit-Cart.git
cd Redux-Toolkit-Cart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🧠 What I Learned

- How to set up a Redux store using `configureStore`
- How to create slices using `createSlice`
- How to use `useSelector` to read state from the store
- How to use `useDispatch` to trigger actions
- How to manage cart logic (add, remove, quantity update) using reducers

---

## 📦 Key Dependencies

```json
{
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "react-toastify": "^10.x",
  "react-icons": "^5.x"
}
```

---

## 👨‍💻 Author

**Sudheer Mishra**
- GitHub: [@sudheermishra](https://github.com/sudheermishra)
- Email: sudheermishra8587@gmail.com
