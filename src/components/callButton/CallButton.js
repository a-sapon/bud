import React, { useContext, useState } from 'react';
import styles from './CallButton.module.css';
import { ScreenContext } from '../App';
import RequestForm from '../requestForm/RequestForm';
import { CSSTransition } from 'react-transition-group';
import animations from '../../styles/burgerAnimation.module.css';

const CallButton = () => {
  const isMobile = useContext(ScreenContext);
  const [callBackWindow, showCallBackWindow] = useState(false);

  const handleClick = (e) => {
    if (!isMobile) {
      showCallBackWindow((prev) => !prev);
    }
  };

  return (
    <>
      <div onClick={handleClick} className={styles.callBtnWrapper}>
        {!callBackWindow ? (
          <a
            href={isMobile ? 'tel:+380939169657' : null}
          >
            <svg
              viewBox='0 0 19.3 20.1'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.callBtn}
            >
              <path d='M4.6 7.6l-.5-.9 2-1.2L4.6 3l-2 1.3-.6-.9 2.9-1.7 2.6 4.1'></path>
              <path d='M9.9 20.1c-.9 0-1.9-.3-2.9-.9-1.7-1-3.4-2.7-4.7-4.8-3-4.7-3.1-9.2-.3-11l.5.9C.2 5.7.4 9.7 3 13.9c1.2 2 2.8 3.6 4.3 4.5 1.1.6 2.7 1.1 4.1.3l1.9-1.2L12 15l-2 1.2c-1.2.7-2.8.3-3.5-.8l-3.2-5.2c-.7-1.2-.4-2.7.8-3.5l.5.9c-.7.4-.9 1.3-.5 2l3.2 5.2c.4.7 1.5.9 2.2.5l2.8-1.7 2.6 4.1-2.8 1.7c-.7.5-1.4.7-2.2.7zM13.7 11.3l-.9-.3c.4-1.1.2-2.2-.4-3.1-.6-1-1.7-1.6-2.8-1.7l.1-1c1.5.1 2.8.9 3.6 2.1.7 1.2.9 2.7.4 4z'></path>
              <path d='M16.5 11.9l-1-.3c.5-1.8.2-3.7-.8-5.3-1-1.6-2.7-2.6-4.7-2.9l.1-1c2.2.3 4.2 1.5 5.4 3.3 1.2 1.9 1.6 4.1 1 6.2z'></path>
              <path d='M18.9 12.5l-1-.3c.7-2.5.2-5.1-1.1-7.2-1.4-2.2-3.7-3.6-6.3-4l.1-1c2.9.4 5.4 2 7 4.4 1.6 2.4 2.1 5.3 1.3 8.1z'></path>
            </svg>
          </a>
        ) : (
          <svg
            viewBox='0 0 23 23'
            xmlns='http://www.w3.org/2000/svg'
            className={styles.callBtn}
          >
            <g stroke='none' strokeWidth='1'>
              <rect
                transform='translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) '
                x='10.3137085'
                y='-3.6862915'
                width='2'
                height='30'
              ></rect>
              <rect
                transform='translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) '
                x='10.3137085'
                y='-3.6862915'
                width='2'
                height='30'
              ></rect>
            </g>
          </svg>
        )}
      </div>
      <CSSTransition
        in={callBackWindow}
        timeout={300}
        classNames={animations}
        unmountOnExit
      >
        <div className={styles.callBackWindow}>
          <h3>Оставьте свой телефон и мы с вами свяжемся!</h3>
          <RequestForm />
          <p className={styles.callBackText}>
            Или вы можете позвонить нам сами: +38(093) 916 9657
          </p>
        </div>
      </CSSTransition>
    </>
  );
};

export default CallButton;
