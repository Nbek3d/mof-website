import { useRef, useEffect } from 'react';
import { categories, logo } from '../utils/const';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  useEffect(() => {
    const hideNavbar = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        navRef.current.classList.remove("responsive_nav");
      }
    };

    document.addEventListener('mousedown', hideNavbar);

    return () => {
      document.removeEventListener('mousedown', hideNavbar);
    };
  }, []);

  return (
    <div className='nav-top'>
      <nav >
        <ul className='container dfa nav'>

          <li>
            <Link to='/'>
              <img src={logo} alt='logo' className='logo' />
            </Link>
          </li>

          <li>

            <ul className='df navbar' ref={navRef} >
              {categories.map(({ id, link, name }) => {
                return (
                  <li key={id}>
                    <Link to={link}
                      className='navbar__link content-text'
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}


              <li>
                <button className='icons x-icon' onClick={showNavbar}>
                  <FaTimes />
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button className='icons menu-icon' onClick={showNavbar}>
              <FaBars />
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
