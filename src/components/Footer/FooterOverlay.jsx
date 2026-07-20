import React from 'react';

import { images } from '../../constants';
import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="app__footer-overlay">
    <img src={images.overlaybg} alt="footer_overlay_bg" />
  </div>
);

export default FooterOverlay;
