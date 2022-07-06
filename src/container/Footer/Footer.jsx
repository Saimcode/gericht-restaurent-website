import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding w-full relative z-1 flex justify-start items-center flex-col bg-primary-black pt-0 sm:px-0 sm:pb-8" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links w-full flex items-start flex-col justify-between lg:flex-row mt-20 py-0 px-8">
      <div className="app__footer-links_contact flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Postcode, Street, City, Country</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <img src={images.gericht} alt="footer_logo" className='w-4/5 mobile:w-[210px] mb-3 lg:mx-auto'/>
        <p className="p__opensans lg:text-center text-left">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img lg:mx-auto" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons mt-2 flex flex-row lg:justify-center">
          <FiFacebook className='text-primary-white m-2 text-2xl cursor-pointer hover:text-primary-golden'/>
          <FiTwitter className='text-primary-white m-2 text-2xl cursor-pointer hover:text-primary-golden'/>
          <FiInstagram className='text-primary-white m-2 text-2xl cursor-pointer hover:text-primary-golden'/>
        </div>
      </div>

      <div className="app__footer-links_work flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <h1 className="app__footer-headtext font-CormorantUpright text-primary-white font-normal leading-10 tracking-wider capitalize text-size-3xl mb-4 big:text-[51px]">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright mt-12">
      <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
