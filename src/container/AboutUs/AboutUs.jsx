import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="relative app__bg flex__center section__padding" id="about">
    <div className="absolute inset-0 flex__center">
      <img src={images.G} alt="G_overlay" className='z-0 h-1/4 sm:h-2/6 lg:w-96 lg:h-96' />
    </div>

    <div className="w-full z-2 flex__center flex-col lg:flex-row">
      <div className=" flex-one flex justify-end items-end flex-col text-right">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="my-1 mx-2 lg:my-8 lg:mx-16 lg:rotate-0 rotate-90 flex__center">
        <img src={images.knife} alt="about_knife" className='h-80vwh lg:h-screen 2xl:h-70vh'/>
      </div> 

      <div className=" flex-one flex justify-start items-start flex-col text-left">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
