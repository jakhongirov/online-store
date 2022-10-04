import logo from "../../Assets/images/logo.svg"
import Menu from "../../Assets/images/menu.svg"
import login from "../../Assets/images/user.svg"
import Save from "../../Assets/images/like-heart.svg"
import basket from "../../Assets/images/shop-cart.svg"

function Header({ menu, setMenu, save }) {
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
                                <option value="ru">
                                    Русский | ₽
                                </option>
                                <option value="uz">
                                    Uzbek | SUM
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="header__bottom-box">
                        <div className="header__bottom-box__menu-box">
                            <button className="header__bottom-box__btn"
                                onClick={() => setMenu(!menu)}
                            >
                                <img src={Menu} alt="menu" width={16} height={16} />
                            </button>
                            <a href="/">
                                <img src={logo} alt="logo" width={150} height={40} />
                            </a>
                        </div>
                        <div className="header__bottom-box__search-box">
                            <input className="header__bottom-box__search-input" type="search" name="search" />
                            <button className="header__bottom-box__search-btn">
                                Везде
                            </button>
                        </div>

                        <ul className="header__bottom-box__list">
                            <li className="header__bottom-box__item">
                                <img className="header__bottom-box__item__img" src={login} alt="user" width={26} height={26} />
                                <p className="header__bottom-box__item__text">Войти</p>
                            </li>
                            <li className="header__bottom-box__item">
                                <img className="header__bottom-box__item__img" src={Save} alt="like-heart" width={27} height={26} />
                                <p className="header__bottom-box__item__text">Избранное</p>
                                <span className="save__count">0</span>
                            </li>
                            <li className="header__bottom-box__item">
                                <img className="header__bottom-box__item__img" src={basket} alt="basket" width={26} height={26} />
                                <p className="header__bottom-box__item__text">Корзина</p>
                                <span className="save__count">{save}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header