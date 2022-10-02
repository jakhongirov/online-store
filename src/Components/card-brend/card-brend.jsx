function CardBrend(item) {
    return (
        <div className="card-brend">
            <div className="card-brend__box">
                <img className="card-brend__img" src="https://download.logo.wine/logo/Huawei/Huawei-Logo.wine.png" alt="logo" width={96} height={40} />
                <h3 className="card-brend__name">Huawei</h3>
            </div>
            <ul className="card-brend__list">
                <li className="card-brend__item">
                    <img className="item__img" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/nova_9.jpg" alt="phone huawei" width={80} height={80} />
                </li>
                <li className="card-brend__item">
                    <img className="item__img" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/nova_9.jpg" alt="phone huawei" width={80} height={80} />
                </li>
                <li className="card-brend__item">
                    <img className="item__img" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/nova_9.jpg" alt="phone huawei" width={80} height={80} />
                </li>
            </ul>
        </div>
    )
}

export default CardBrend