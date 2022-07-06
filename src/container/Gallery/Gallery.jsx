import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center flex-col bg-primary-black py-16 px-8 xl:px-24 xl:flex-row">
      <div className="app__gallery-content flex-one flex justify-center items-center flex-col min-w-[100%] xl:pr-8 sm:min-w-[500px] ">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans mt-8 text-center" style={{ color: '#AAAAAA'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button my-10 xl:mt-8">View More</button>
      </div>
      <div className="app__gallery-images flex-one flex flex-row max-w-[90%] relative xl:max-w-[50%]">
        <div className="app__gallery-images_container flex flex-row w-max overflow-x-scroll" ref={scrollRef}>

          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card relative min-w-[240px] h-[320px] mr-8 flex__center sm:min-w-[301px] sm:h-[447px] " key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" className='w-full h-full object-cover opacity-100 duration-500 ease-in-out'/>
              <BsInstagram className="gallery__image-icon absolute text-primary-white text-size-4xl opacity-0 duration-500 ease-in-out cursor-pointer" />
            </div>
          ))}

        </div>
        <div className="app__gallery-images_arrows w-full flex justify-between items-center py-0 px-4 absolute bottom-[5%]">
          <BsArrowLeftShort className="gallery__arrow-icon text-primary-golden text-size-4xl cursor-pointer bg-primary-black rounded-md hover:text-primary-white" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon text-primary-golden text-size-4xl cursor-pointer bg-primary-black rounded-md hover:text-primary-white" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
