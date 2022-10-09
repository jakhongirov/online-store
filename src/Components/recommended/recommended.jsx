import Card from "../card/card"

function Recommended({ save, setSave }) {
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

                <button className="recommended__btn">
                    <span>Все товары</span>
                </button>
            </div>
        </section>
    )
}

export default Recommended