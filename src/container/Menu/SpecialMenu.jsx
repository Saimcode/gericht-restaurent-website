import React, { useState } from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';

const foodItems = [
  { id: 1, name: "Classic Burger", category: "Burger", price: "₹120" },
  { id: 2, name: "Cheese Burger", category: "Burger", price: "₹150" },
  { id: 3, name: "Chicken Burger", category: "Burger", price: "₹180" },
  { id: 4, name: "Spicy Zinger Burger", category: "Burger", price: "₹200" },

  { id: 5, name: "Margherita Pizza", category: "Pizza", price: "₹180" },
  { id: 6, name: "Cheese Burst Pizza", category: "Pizza", price: "₹250" },
  { id: 7, name: "Veg Supreme Pizza", category: "Pizza", price: "₹220" },
  { id: 8, name: "Chicken Pepperoni Pizza", category: "Pizza", price: "₹300" },

  { id: 9, name: "Coke", category: "Drinks", price: "₹40" },
  { id: 10, name: "Pepsi", category: "Drinks", price: "₹40" },
  { id: 11, name: "Fresh Lime Soda", category: "Drinks", price: "₹60" },
  { id: 12, name: "Mango Shake", category: "Drinks", price: "₹80" },

  { id: 13, name: "French Fries", category: "Snacks", price: "₹90" },
  { id: 14, name: "Peri Peri Fries", category: "Snacks", price: "₹120" },
  { id: 15, name: "Onion Rings", category: "Snacks", price: "₹110" },
  { id: 16, name: "Chicken Nuggets", category: "Snacks", price: "₹150" },
];

const SpecialMenu = () => {

  const [items, setItems] = useState(foodItems);
  const [cart, setCart] = useState([]);

  // 🧠 FILTER FUNCTION
  const filterItem = (category) => {
    if (category === "All") {
      setItems(foodItems);
      return;
    }

    const updatedItems = foodItems.filter(
      (item) => item.category === category
    );

    setItems(updatedItems);
  };

  // 🛒 ADD TO CART FUNCTION
  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div className="flex-col bg-primary-black flex__center section__padding" id="menu">

      {/* CART DISPLAY */}
      <div className="cart-box">
        🛒 Cart Items: {cart.length}
      </div>

      {/* Heading */}
      <div className="mb-8 m-auto flex flex-col justify-center items-center">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today's Special</h1>

        {/* Filter Buttons */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center">

          <button onClick={() => filterItem("All")} className="custom__button">All</button>
          <button onClick={() => filterItem("Burger")} className="custom__button">Burger</button>
          <button onClick={() => filterItem("Pizza")} className="custom__button">Pizza</button>
          <button onClick={() => filterItem("Drinks")} className="custom__button">Drinks</button>
          <button onClick={() => filterItem("Snacks")} className="custom__button">Snacks</button>

        </div>
      </div>

      {/* Menu Section */}
      <div className="app__specialMenu-menu w-full mt-8 mx-0 flex justify-center items-center flex-col lg:items-start lg:flex-row">

        <div className="app__specialMenu-menu_food flex__center flex-one w-full flex-col">

          <p className="app__specialMenu-menu_heading font-CormorantUpright font-semibold text-4xl text-primary-white">
            Food Items
          </p>

          <div className="app__specialMenu_menu_items flex flex-col mx-0 my-8 w-full">

            {items.map((food) => (
              <MenuItem
                key={food.id}
                title={food.name}
                price={food.price}
                tags={food.category}
                onAdd={() => addToCart(food)}
              />
            ))}

          </div>
        </div>

        {/* Image */}
        <div className="app__specialMenu-menu_img w-full mt-4 mb-12 mx-0 lg:w-[410px] lg:mx-8 lg:my-0 2xl:w-[650px]">
          <img
            src={images.menu2}
            alt="menu_img"
            className="m-auto w-5/6 h-auto"
          />
        </div>

      </div>

      {/* Button */}
      <div className="mt-4">
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

    </div>
  );
};

export default SpecialMenu;