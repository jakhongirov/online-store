import Card from "../card/card"

function Hurry() {
    return (
        <>
            <section className="hurry">
                <div className="container">
                    <h2 className="hurry__heading">Успей купить</h2>

                    <div className="hurry__list">
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

                    <button className="hurry__btn">Все товары</button>
                </div>
            </section>
        </>
    )
}

export default Hurry