import downArrow from "../../Assets/images/down-arrow.svg"

function Categories({ menu, setCategories, categories }) {
    return (
        <div className={menu ? "categories" : "close"}>
            <div className="categories__heading-box">
                <h4 className="categories__heading">Популярные категории</h4>
            </div>

            <ul className="categories__list">
                <li className="categories__item">
                    Компьютеры и оргтехника
                </li>
                <li className="categories__item">
                    Электроника
                </li>
                <li className="categories__item">
                    Бытовая техника
                </li>
                <li className="categories__item">
                    Одежда для женщин
                </li>
                <li className="categories__item">
                    Одежда для мужчин
                </li>
                <li className="categories__item">
                    Все для детей
                </li>
                <li className="categories__item">
                    Автотовары
                </li>
                <li className="categories__item">
                    Красота и здоровье
                </li>
                <li className="categories__item">
                    Спорт и развлечения
                </li>
            </ul>

            <button className="categories__btn" onClick={() => setCategories(!categories)}>
                Все категории
                <img src={downArrow} alt="down Arrow" width={8} height={4} />
            </button>
        </div>
    )
}

export default Categories