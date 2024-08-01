// // src/Menu.js
// import React from 'react';
// import './Menu.css'; // Make sure to create this CSS file for styling

// const Menu = () => {
//   const menuItems = [
//     {
//       name: 'Mr. Bacon',
//       description: 'Crispy bacon and fresh vegetables',
//       price: '320 ₽',
//       image: 'path_to_image/mr_bacon.jpg', // Add the correct image path here
//     },
//     {
//       name: 'Meat Coast',
//       description: 'Triple beef, triple cheese, and fresh vegetables',
//       price: '450 ₽',
//       image: 'path_to_image/meat_coast.jpg',
//     },
//     {
//       name: 'Chicken Burger',
//       description: 'Burger with chicken fillet and fresh vegetables',
//       price: '280 ₽',
//       image: 'path_to_image/chicken_burger.jpg',
//     },
//     {
//       name: 'Junior',
//       description: 'Cheeseburger with fresh meat and cheese',
//       price: '250 ₽',
//       image: 'path_to_image/junior.jpg',
//     },
//   ];

//   return (
//     <div className="menu">
//       <h1>Burger Queens</h1>
//       <div className="menu-items">
//         {menuItems.map((item, index) => (
//           <div className="menu-item" key={index}>
//             <img src={item.image} alt={item.name} />
//             <div className="menu-item-info">
//               <h2>{item.name}</h2>
//               <p>{item.description}</p>
//               <p className="price">{item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;
