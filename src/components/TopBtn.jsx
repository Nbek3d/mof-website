import { AiOutlineArrowUp } from 'react-icons/ai';
import { useState } from 'react';

const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <>
      {isVisible && (
        <div className='top-btn dfaj' onClick={scrollToTop}>
          <AiOutlineArrowUp className='col-fff content-text'/> 
        </div>
      )}
    </>
  )
}

export default TopBtn;
