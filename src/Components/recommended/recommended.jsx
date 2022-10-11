import { useState } from "react"
import Card from "../card/card"

function Recommended({ save, setSave }) {
    const [open, setOpen] = useState(false)

    return (
        <section className="recommended">
            <div className="container">
                <h2 className="recommended__heading">Рекомендуемые для вас товары</h2>

                <div className="recommended__list">
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                </div>

                <div className={open ? "recommended__list" : "close"}>
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                    <Card setSave={setSave} save={save} />
                </div>

                <button className="recommended__btn" onClick={() => setOpen(!open)}>
                    <span>
                        {open ? "Закрыть" : "Все товары"}
                    </span>
                </button>
            </div>
        </section>
    )
}

export default Recommended