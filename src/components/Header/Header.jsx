import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}>
            <a href="#">
                <img src="https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png" alt=""/>
            </a>
        </header>
    )
}

export default Header;