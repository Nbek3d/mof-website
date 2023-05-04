import { useRef, useEffect } from 'react';
import { categories, logo, logo2 ,tuit} from '../utils/const';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = (shouldHide) => {
    navRef.current.classList.toggle('responsive_nav');
    if (shouldHide) {
      hideNavbar();
    }
  };

  const hideNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.remove('responsive_nav');
    }
  };

  const handleScroll = () => {
    // Remove responsive_nav class from navbar to close it when scrolling
    if (navRef.current) {
      navRef.current.classList.remove('responsive_nav');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        hideNavbar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav-top">
      <nav>
        <ul className="container dfa nav">
          <li className='df gap-20'>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <a href="https://mudofaa.uz/" target='_blank' rel="noopener noreferrer">
              <img src={logo2} alt="logo" className="logo" />
            </a>

            <a href="https://tuit.uz/" target='_blank' rel="noopener noreferrer">
              <img src={tuit} alt="logo" className="logo" />
            </a>
          </li>

          <li>
            <ul className="df navbar" ref={navRef}>
              {categories.map(({ id, link, name }) => {
                return (
                  <li key={id}>
                    <Link
                      to={link}
                      className="navbar__link content-text"
                      onClick={() => showNavbar(true)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button className="icons x-icon" onClick={() => showNavbar(false)}>
                  <FaTimes />
                </button>
              </li>
            </ul>
          </li>

          <li className='dfa gap-20'>
           

            <button className="icons menu-icon" onClick={() => showNavbar(false)}>
              <FaBars />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;