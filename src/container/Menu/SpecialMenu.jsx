import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="flex-col bg-primary-black flex__center section__padding" id="menu">
    <div className="mb-8 m-auto flex flex-col justify-center items-center">
      <SubHeading title="Menu that fits your palatte"/>
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu w-full mt-8 mx-0 flex justify-center items-center flex-col lg:items-start lg:flex-row">
      <div className="app__specialMenu-menu_food  flex__center flex-one w-full flex-col">
        <p className="app__specialMenu-menu_heading font-CormorantUpright font-semibold text-4xl leading-9 tracking-wider text-primary-white md:text-5xl">Meals</p>
        <div className="app__specialMenu_menu_items flex flex-col mx-0 my-8 w-full">
          {data.food.map((food, index) => (
            <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img w-full mt-4 mb-12 mx-0 lg:w-[410px] lg:mx-8 lg:my-0 2xl:w-[650px]">
        <img src={images.menu2} alt="menu__img" className='m-auto w-5/6 h-auto 2xl:h-[920px]'/>
      </div>

      <div className="app__specialMenu-menu_drinks  flex__center flex-one w-full flex-col">
        <p className="app__specialMenu-menu_heading font-CormorantUpright font-semibold text-4xl leading-9 tracking-wider text-primary-white md:text-5xl">Drinks</p>
        <div className="app__specialMenu_menu_items flex flex-col mx-0 my-8 w-full">
          {data.drinks.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div className='mt-4'>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
