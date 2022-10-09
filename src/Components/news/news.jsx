import Card from "../card/card"

function News({ save, setSave }) {
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

                    <button className="news__btn">
                        <span>Все товары</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default News