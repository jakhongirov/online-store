import { useState } from "react"
import CardBrend from "../card-brend/card-brend"

function Shops() {
    const [open, setOpen] = useState(false)

    return (
        <section className="shops">
            <div className="container">
                <h2 className="shops__heading">Магазины для вас</h2>

                <div className="shops__box">

                    <div className="shops__list">
                        <CardBrend />
                        <CardBrend />
                        <CardBrend />
                        <CardBrend />
                        <CardBrend />
                        <CardBrend />
                    </div>

                    <div className="shops__anons">
                        <div className="shops__anons__item">
                            <img src="https://api.sergelihokimiyati.uz/media/news/bilbordova-bilbordska-vushna-reklama_CUvUVsp.jpeg" alt="anons" width={296} height={208} />
                        </div>
                        <div className="shops__anons__item">
                            <img src="https://api.sergelihokimiyati.uz/media/news/bilbordova-bilbordska-vushna-reklama_CUvUVsp.jpeg" alt="anons" width={296} height={208} />
                        </div>
                    </div>
                </div>

                <div className="shops__box">
                    <CardBrend />
                    <CardBrend />
                    <CardBrend />
                    <CardBrend />
                </div>

                <div className={open ? "shops__box" : "close"}>
                    <CardBrend />
                    <CardBrend />
                    <CardBrend />
                    <CardBrend />
                    <CardBrend />
                    <CardBrend />
                    <CardBrend />
                    <CardBrend />
                </div>

                <button className="shops__btn" onClick={() => setOpen(!open)}>
                    <span>
                        {open ? "Закрыть" : "Все товары"}
                    </span>
                </button>

            </div>
        </section>
    )
}

export default Shops