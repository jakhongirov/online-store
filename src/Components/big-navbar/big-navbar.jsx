import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Navigation } from "swiper";

function BigNavbar({ categories }) {
    return (
        <section className={categories ? "navbar" : "close"}>
            <div className="container">
                <div className="navbar__box-left">
                    <p className="navbar__box-left__text">Акции</p>

                    <ul className="navbar__box-left__list">
                        <li className="navbar__box-left__item">Компьютеры и оргтехника</li>
                        <li className="navbar__box-left__item">Электроника</li>
                        <li className="navbar__box-left__item">Бытовая техника</li>
                        <li className="navbar__box-left__item">Одежда для мужчин</li>
                        <li className="navbar__box-left__item">Одежда для женщин</li>
                        <li className="navbar__box-left__item">Все для детей</li>
                        <li className="navbar__box-left__item">Автотовары</li>
                        <li className="navbar__box-left__item">Красота и здоровье</li>
                        <li className="navbar__box-left__item">Спорт и развлечения</li>
                        <li className="navbar__box-left__item">Товары для животных</li>
                        <li className="navbar__box-left__item">Хобби и творчество</li>
                        <li className="navbar__box-left__item">Канцелярские товары</li>
                        <li className="navbar__box-left__item">Бытовая химия</li>
                        <li className="navbar__box-left__item">Спорт и развлечения</li>
                        <li className="navbar__box-left__item">Товары для животных</li>
                        <li className="navbar__box-left__item">Хобби и творчество</li>
                        <li className="navbar__box-left__item">Канцелярские товары</li>
                        <li className="navbar__box-left__item">Бытовая химия</li>
                        <li className="navbar__box-left__item"><strong>Premium</strong></li>
                        <li className="navbar__box-left__item"><strong>Уцененные товары</strong></li>
                    </ul>
                </div>

                <div className="navbar__box-right">
                    <div className="navbar__box-right__categories-box">
                        <ul className="">
                            <li className="">Укладка волос</li>
                            <li className="">Электрощипцы и плойки</li>
                            <li className="">Выпрямители</li>
                            <li className="">Мультистайлеры</li>
                            <li className="">Электробигуди</li>
                            <li className="">Фены и фены-щётки</li>
                            <li className="">Термощётки</li>
                            <li className="">Средства для укладки</li>
                        </ul>

                        <ul className="">
                            <li className="">Бритьё и стрижка</li>
                            <li className="">Электробритвы</li>
                            <li className="">Машинки для стрижки</li>
                            <li className="">Триммеры</li>
                            <li className="">OneBlade Pro</li>
                            <li className="">Аксессуары для электробритв</li>
                        </ul>

                        <ul className="">
                            <li className="">Товары для красоты</li>
                            <li className="">Эпиляторы</li>
                            <li className="">Для ухода за лицом</li>
                            <li className="">Для ухода за ногами</li>
                            <li className="">Маникюрные наборы</li>
                            <li className="">Зеркала косметические</li>
                        </ul>

                        <ul className="">
                            <li className="">Товары для ухода</li>
                            <li className="">Эпиляторы</li>
                            <li className="">Для ухода за лицом</li>
                            <li className="">Для ухода за ногами</li>
                            <li className="">Маникюрные наборы</li>
                            <li className="">Зеркала косметические</li>
                        </ul>
                    </div>

                    <div className="navbar__box-right__categories-box">
                        <ul className="">
                            <li className="">Товары для здоровья</li>
                            <li className="">Зубные щётки</li>
                            <li className="">Ирригаторы и зубные центры</li>
                            <li className="">Весы</li>
                            <li className="">Массажёры</li>
                            <li className="">Массажные ванночки для ног</li>
                            <li className="">Ингаляторы</li>
                            <li className="">Тонометры</li>
                            <li className="">Устройства для дезинфекции</li>

                        </ul>

                        <ul className="">
                            <li className="">Товары для детей</li>
                            <li className="">Видеоняни</li>
                            <li className="">Зубные щетки</li>
                            <li className="">Увлажнители воздуха</li>
                            <li className="">Ингаляторы</li>
                            <li className="">Детские светильники</li>
                            <li className="">Пароварки-блендеры</li>
                            <li className="">Товары для кормления</li>
                            <li className="">Детский проектор</li>
                        </ul>

                        <ul className="">
                            <li className="">Товары для фитнеса</li>
                            <li className="">Смарт-часы</li>
                            <li className="">Фитнес-браслеты</li>
                            <li className="">Спортивные часы</li>
                            <li className="">MP3-плееры</li>
                            <li className="">Умные весы</li>
                            <li className="">Гироскутеры</li>
                            <li className="">Спортивные наушники</li>
                            <li className="">Электрические велосипеды</li>
                        </ul>

                        <ul className="">
                            <li className="">Товары для детей</li>
                            <li className="">Видеоняни</li>
                            <li className="">Зубные щетки</li>
                            <li className="">Увлажнители воздуха</li>
                            <li className="">Ингаляторы</li>
                            <li className="">Детские светильники</li>
                            <li className="">Пароварки-блендеры</li>
                            <li className="">Товары для кормления</li>
                            <li className="">Детский проектор</li>
                        </ul>
                    </div>

                    <div className="">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <img src="https://media.istockphoto.com/vectors/store-line-icon-outline-vector-symbol-illustration-pixel-perfect-vector-id1194059544?k=20&m=1194059544&s=612x612&w=0&h=-NqlzA9eWMTjbFYzG5iPOkcRNOTRayFL2bo8mi1qNLo=" alt="img" width={900} height={350} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://media.istockphoto.com/vectors/store-line-icon-outline-vector-symbol-illustration-pixel-perfect-vector-id1194059544?k=20&m=1194059544&s=612x612&w=0&h=-NqlzA9eWMTjbFYzG5iPOkcRNOTRayFL2bo8mi1qNLo=" alt="img" width={900} height={350} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://media.istockphoto.com/vectors/store-line-icon-outline-vector-symbol-illustration-pixel-perfect-vector-id1194059544?k=20&m=1194059544&s=612x612&w=0&h=-NqlzA9eWMTjbFYzG5iPOkcRNOTRayFL2bo8mi1qNLo=" alt="img" width={900} height={350} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://media.istockphoto.com/vectors/store-line-icon-outline-vector-symbol-illustration-pixel-perfect-vector-id1194059544?k=20&m=1194059544&s=612x612&w=0&h=-NqlzA9eWMTjbFYzG5iPOkcRNOTRayFL2bo8mi1qNLo=" alt="img" width={900} height={350} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BigNavbar