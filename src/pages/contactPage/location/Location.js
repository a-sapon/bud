import React from 'react';
import styles from './Location.module.css';
import contactStyles from '../Contact.module.css';

export const Location = () => {
  // const isMobile = useContext(ScreenContext);
  return (
    <>
      <svg viewBox='0 0 512 512' className={contactStyles.contactIcon}>
        <g>
          <g>
            <path d='M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z' />
          </g>
        </g>
        <g>
          <g>
            <path d='M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z' />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
      <a
        href='https://goo.gl/maps/rLykheEdUR6xpZVB6'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.locationLink}
      >
        Киев, Украина
      </a>
    </>
  );
};