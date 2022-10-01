function Card(item) {
    return (
        <>
            <div className="card">
                <div className="card__img-box">
                    <img src="https://allgood.uz/storage/products/October2021/NtLV4VgkeMl4csAAuJy8-small.jpeg" alt="t-shirt" width={160} height={160} />
                </div>
                <p className="card__price">1 999 ₽</p>
                <p className="card__info">
                    Футболка с дизайнерским принтом Super Shape 02 фиолетовая
                </p>
            </div>
        </>
    )
}

export default Card