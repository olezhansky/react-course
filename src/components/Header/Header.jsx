import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
const Header = (props) => {
    return (
        <header className={s.header}>
            <a href="#">
                <img src="https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png" alt=""/>
                <div className={s.loginBlock}>
                    {
                        props.isAuth ? props.login :
                        <NavLink to={'/login'}>
                            Login
                        </NavLink>
                    }  
                </div>
            </a>
        </header>
    )
}

export default Header;