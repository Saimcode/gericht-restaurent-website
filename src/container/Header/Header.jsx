import { motion } from 'framer-motion';
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden" id="home">
    <div className="flex-1 w-full flex items-start justify-center flex-col">
      <SubHeading title="Chase the new flavour" />
      
      <motion.h1
  className="headtext__cormorant font-bold mb-4"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  The Key To Fine Dining
</motion.h1>
      <p className="p__opensans mb-4">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      
      <motion.button
  type="button"
  className="custom__button"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Explore Menu
</motion.button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
