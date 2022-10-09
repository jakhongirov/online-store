import Card from "../card/card"

function Hurry({ setSave, save }) {
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

                    <button className="hurry__btn">
                        <span>Все товары</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Hurry