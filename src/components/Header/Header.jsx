import { Link } from 'react-router-dom';
import logoPic from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <Link to='/'>
          <img className='logo' src={logoPic} alt="logo" />
        </Link>
        <div className='nav-sections'>
          <Link to='/' className='navbar-link'>
            <span>Home</span>
          </Link>
          <Link to='/hello' className='navbar-link'>
            <span>Greeting</span>
          </Link>
        </div>
      </nav>
      <hr />
    </header>
  )
};

export default Header;