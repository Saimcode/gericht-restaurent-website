import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="h-screen relative">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        className='w-full h-full object-cover'
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)] flex__center">
        <div
          className=" w-[100px] h-[100px] rounded-full border-[1px] border-primary-golden cursor-pointer flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill className='text-primary-white text-[30px]' />
          ) : (
            <BsFillPlayFill className='text-primary-white text-[30px]' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
