import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Navigation } from "swiper";

import Categories from "../categories/categories"

function Intro({ menu, setCategories, categories }) {
    return (
        <>
            <section className="intro">
                <div className="container">

                    <Categories menu={menu} setCategories={setCategories} categories={categories} />

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
                            <a href="https://asaxiy.uz/">
                                <img
                                    src="https://www.zdnet.com/a/img/resize/3b0288ccb267455a19d47d7c740a9d6b6f11ebc2/2020/11/22/ca2302cc-c59f-4ae2-9091-6340e4f120e3/iphone-12-mini1.jpg?auto=webp&fit=crop&height=900&width=1200"
                                    alt="anons"
                                    width={296}
                                    height={208} />
                            </a>
                        </div>
                        <div className="intro__anons__item">
                            <a href="https://asaxiy.uz/">
                                <img 
                                src="https://api.sergelihokimiyati.uz/media/news/bilbordova-bilbordska-vushna-reklama_CUvUVsp.jpeg" 
                                alt="anons" 
                                width={296} 
                                height={208} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Intro