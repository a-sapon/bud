import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type='Rings'
    color='#0066cc'
    height={100}
    width={100}
    timeout={3000}
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  />
);

export default Spinner;
