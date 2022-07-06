import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card flex-one flex justify-start items-start min-w-full my-4 mx-0 mobile:m-4 mobile:min-w-[230px] 2xl:min-w-[390px]">
    <img src={imgUrl} alt="awards" className='w-[50px] h-[50px]'/>
    <div className="app__laurels_awards-card_content flex flex-col ml-4">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards flex justify-start items-center flex-wrap mt-12">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className=" flex-one flex justify-center items-center ml-0 mt-8 w-full lg:ml-8 lg:mt-0">
      <img src={images.laurels} alt="laurels_img" className='w-full px-4 mobile:px-0 mobile:mt-4 sm:w-3/5 lg:w-4/5' />
    </div>
  </div>
);

export default Laurels;
