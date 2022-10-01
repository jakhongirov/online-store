import logo from "../../Assets/images/logo.svg"
import menu from "../../Assets/images/menu.svg"

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__top-box">
                        <div className="header__top-box__right-box">
                            <nav className="top-box__right-box__nav">
                                <ul className="nav__list">
                                    <li className="nav__item">Покупателям</li>
                                    <li className="nav__item">Поставщикам</li>
                                    <li className="nav__item">Частые вопросы</li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header__lang-box">
                            <select className="lang-box__select">
                                <option value="ru">| Русский | ₽</option>
                                <option value="uz">| Uzbek | SUM</option>
                            </select>
                        </div>
                    </div>

                    <div className="header__bottom-box">
                        <div className="header__bottom-box__menu-box">
                            <button className="header__bottom-box__btn">
                                <img src={menu} alt="menu" width={16} height={16} />
                            </button>
                            <a href="/">
                                <img src={logo} alt="logo" width={150} height={40} />
                            </a>
                        </div>
                        <div className="header__bottom-box__search-box">
                            <input className="header__bottom-box__search-input" type="search" name="search" />
                            <button className="header__bottom-box__search-btn">Везде</button>
                        </div>

                        <ul className="header__bottom-box__list">
                            <li className="header__bottom-box__item">login</li>
                            <li className="header__bottom-box__item">save</li>
                            <li className="header__bottom-box__item">basket</li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header