import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Navigation } from "swiper";
import Categories from "../categories/categories"

function Intro({ menu }) {
    return (
        <section className="intro">
            <div className="container">

                <Categories menu={menu} />

                <div className="intro__swiper-box">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <img src="https://media.istockphoto.com/vectors/store-line-icon-outline-vector-symbol-illustration-pixel-perfect-vector-id1194059544?k=20&m=1194059544&s=612x612&w=0&h=-NqlzA9eWMTjbFYzG5iPOkcRNOTRayFL2bo8mi1qNLo=" alt="img" width={900} height={350} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media.istockphoto.com/vectors/store-line-icon-outline-vector-symbol-illustration-pixel-perfect-vector-id1194059544?k=20&m=1194059544&s=612x612&w=0&h=-NqlzA9eWMTjbFYzG5iPOkcRNOTRayFL2bo8mi1qNLo=" alt="img" width={900} height={350} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media.istockphoto.com/vectors/store-line-icon-outline-vector-symbol-illustration-pixel-perfect-vector-id1194059544?k=20&m=1194059544&s=612x612&w=0&h=-NqlzA9eWMTjbFYzG5iPOkcRNOTRayFL2bo8mi1qNLo=" alt="img" width={900} height={350} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://media.istockphoto.com/vectors/store-line-icon-outline-vector-symbol-illustration-pixel-perfect-vector-id1194059544?k=20&m=1194059544&s=612x612&w=0&h=-NqlzA9eWMTjbFYzG5iPOkcRNOTRayFL2bo8mi1qNLo=" alt="img" width={900} height={350} />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={menu ? "close" : "intro__anons"}>
                    <div className="intro__anons__item">
                        <img src="https://api.sergelihokimiyati.uz/media/news/bilbordova-bilbordska-vushna-reklama_CUvUVsp.jpeg" alt="anons" width={296} height={208} />
                    </div>
                    <div className="intro__anons__item">
                        <img src="https://api.sergelihokimiyati.uz/media/news/bilbordova-bilbordska-vushna-reklama_CUvUVsp.jpeg" alt="anons" width={296} height={208} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Intro