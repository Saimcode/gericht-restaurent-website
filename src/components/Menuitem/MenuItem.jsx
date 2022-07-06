import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem w-full my-4 mx-0 flex flex-col">
    <div className="app__menuitem-head flex justify-between items-center">
      <div className="app__menuitem-name flex-one">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash w-[90px] h-[1px] bg-primary-golden mx-4 my-0" />
      <div className="app__menuitem-price flex justify-end items-end">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub w-full mt-[0.2rem]">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
