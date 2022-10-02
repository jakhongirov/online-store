function Card(item) {
    return (
        <>
            <div className="card">
                <div className="card__img-box">
                    <img src="https://assets.asaxiy.uz/product/items/desktop/a1ef87e67eeed723449d32f44f8f59c52021070617031937044ynMgu2fDTu.jpg.webp" alt="t-shirt" width={160} height={160} />
                </div>
                <p className="card__price">1 999 ₽</p>
                <p className="card__info">
                    Футболка с дизайнерским принтом Super Shape 02 фиолетовая
                </p>

                <div className="card__hover-box">
                    <div className="hover-box__mmark">
                        <p className="">4.9</p>
                        <span>14 отзывов</span>
                    </div>
                    <h3 className="hover-box__title">Marple</h3>
                    <p className="hover-box__info card__info">
                        Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне
                    </p>

                    <button className="hover-bx__btn">
                        В корзину
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card