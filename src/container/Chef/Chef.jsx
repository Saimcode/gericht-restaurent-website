import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info flex justify-start items-start">
      <SubHeading title="Chef's word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content flex flex-col w-full mt-10">
        <div className="app__chef-content_quote flex justify-start items-end">
          <img src={images.quote} alt="quote_image" className='w-[47px] h-[40px] mt-0 mr-4 mb-4 ml-0'/>
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign wi-full mt-10">
        <p className=' font-CormorantUpright font-normal text-[32px] leading-9 tracking-wider capitalize text-primary-golden '>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" className='w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]'/>
      </div>
    </div>
  </div>
);

export default Chef;
