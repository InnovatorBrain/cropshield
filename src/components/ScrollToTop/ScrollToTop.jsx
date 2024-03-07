import React, { useState, useEffect } from 'react';
import "./ScrollToTop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const windowScrollListener = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', windowScrollListener);

    return () => {
      window.removeEventListener('scroll', windowScrollListener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top-button ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default ScrollTopButton;
