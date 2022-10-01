import logo from "../../Assets/images/logo-footer.svg";
import instagram from "../../Assets/images/instagram.svg";
import vk from "../../Assets/images/vk.svg";
import facebook from "../../Assets/images/facebook.svg";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">

                    <div className="footer__top-box">
                        <div className="top-box__left-box">
                            <ul className="left-box__list">
                                <li className="left-box__item">Покупателям</li>
                                <li className="left-box__item">Как это работает</li>
                                <li className="left-box__item">Защита покупателя</li>
                                <li className="left-box__item">Условия оплаты</li>
                                <li className="left-box__item">Условия использования</li>
                                <li className="left-box__item">Регистрация аккаунта</li>
                            </ul>
                            <ul className="left-box__list">
                                <li className="left-box__item">Поставщикам</li>
                                <li className="left-box__item">Как стать продавцом</li>
                                <li className="left-box__item">Правила участия</li>
                                <li className="left-box__item">Личный кабинет продавца</li>
                            </ul>
                            <ul className="left-box__list">
                                <li className="left-box__item">О компании</li>
                                <li className="left-box__item">О PlaceMik</li>
                                <li className="left-box__item">Новости</li>
                                <li className="left-box__item">Часто задаваемые вопросы</li>
                                <li className="left-box__item">Служба поддержки</li>
                                <li className="left-box__item">Сообщить о нарушении авторских прав </li>
                            </ul>
                        </div>
                        <div className="top-box__right-box">
                            <div className="right-box__top-box">
                                <p className="right-box__top-box__text">
                                    Хотите быть в курсе последних новостей и акций?
                                </p>
                                <div className="right-box__top-box__div">
                                    <p className="">konstantinkonstantinov@yandex.ru</p>
                                    <button className="">Подписаться</button>
                                </div>
                            </div>
                            <div className="right-box__bottom-box">
                                <p className="right-box__bottom-box__text">
                                    <strong>Мы в соцсетях</strong>
                                </p>
                                <ul className="right-box__bottom-box__list">
                                    <li className="right-box__bottom-box__item">
                                        <a href="http://vk.com/">
                                            <img src={vk} alt="vk" width={28} height={25} />
                                        </a>
                                    </li>
                                    <li className="right-box__bottom-box__item">
                                        <a href="http://instagram.com/">
                                            <img src={instagram} alt="instagram" width={25} height={25} />
                                        </a>
                                    </li>
                                    <li className="right-box__bottom-box__item">
                                        <a href="http://facebook.com/">
                                            <img src={facebook} alt="facebook" width={16} height={25} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__bottom__logo-box">
                            <img src={logo} alt="logo" width={200} height={35} />
                        </div>

                        <p className="footer__bottom__text">
                            © PlaceMik.ru, 2021
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer 