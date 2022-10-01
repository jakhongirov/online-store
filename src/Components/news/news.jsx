import Card from "../card/card"

function News() {
    return (
        <>
            <section className="news">
                <div className="container">
                    <h2 className="news__heading">Новинки</h2>

                    <div className="news__list">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                    <button className="news__btn">Все товары</button>
                </div>
            </section>
        </>
    )
}

export default News