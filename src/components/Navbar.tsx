import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/SpaceHorseLogo.png';

const Navbar: React.FC = () => {

    return (
        <nav className={styles.navbarContainer}>
            <Link to={"/home"}>
                <img className={styles.logo} src={logo} alt="SPACE HORSE LOGO" />
            </Link>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </nav>
    )
}

export default Navbar;
