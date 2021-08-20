import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Welcome</Link></li>
              <li><Link to='/products'>Products</Link></li>
            </ul>
          </nav>
        </header>
    )
}

export default Header;