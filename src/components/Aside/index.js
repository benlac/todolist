import React from 'react';

import illu from './illu.png';
import './aside.scss';

const Aside = () => (
  <div className="aside">
    <img src={illu} alt="" className="aside__img" />
  </div>
);

export default Aside;
