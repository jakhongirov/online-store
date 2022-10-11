import { useState } from "react"
import Card from "../card/card"

function News({ save, setSave }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <section className="news">
                <div className="container">
                    <h2 className="news__heading">Новинки</h2>

                    <div className="news__list">
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

                    <div className={open ? "news__list" : "close"}>
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

                    <button className="news__btn" onClick={() => setOpen(!open)}>
                        <span>
                            {open ? "Закрыть" : "Все товары"}
                        </span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default News