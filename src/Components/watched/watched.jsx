import Cartflex from "../card-flex/card-flex"

function Watched() {
    return (
        <section className="watched">
            <div className="container">
                <h2 className="watched__heading">Ранее вы смотрели</h2>

                <div className="watched__list">
                    <Cartflex />
                    <Cartflex />
                    <Cartflex />
                    <Cartflex />
                    <Cartflex />
                </div>
            </div>
        </section>
    )
}

export default Watched