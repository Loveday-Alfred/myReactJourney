// import React, { useState } from 'react';

// import AddUser from './component/Users/AddUser';
// import UsersList from './component/Users/UsersList';

// function App() {
//   const [usersList, setUsersList] = useState([]);

//   const addUserHandler = (uName, uAge) => {
//     setUsersList((prevUsersList) => {
//       return [
//         ...prevUsersList,
//         { name: uName, age: uAge, id: Math.random().toString() },
//       ];
//     });
//   };

//   return (
//     <>
//       <AddUser onAddUser={addUserHandler} />
//       <UsersList users={usersList} />
//     </>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';

// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
// import MainHeader from './components/MainHeader/MainHeader';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//   useEffect(() => {
//     const stored = localStorage.getItem('isLoggedIn');

//     if(stored === '1')
//       setIsLoggedIn(true);
//   }, []) 

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn', '1');
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn')
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;




import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;