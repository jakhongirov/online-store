import { useState } from "react"
import Card from "../card/card"

function Hurry({ setSave, save }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <section className="hurry">
                <div className="container">
                    <h2 className="hurry__heading">Успей купить</h2>

                    <div className="hurry__list">
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

                    <div className={open ? "hurry__list" : "close"}>
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

                    <button className="hurry__btn" onClick={() => setOpen(!open)}>
                        <span>
                            {open ? "Закрыть" : "Все товары"}
                        </span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Hurry