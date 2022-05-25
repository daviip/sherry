import Image from "next/image";
import uno from "../public/slider/slider.webp";
import dos from "../public/slider/slider2.jpg";
import tres from "../public/slider/slider3.jpg";
import cuatro from "../public/slider/slider4.jpg";
import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../styles/Home.module.css";

export const Slider = () => {
  const img = [
    {
      id: 1,
      image: uno,
      name: "Hombre",
    },
    {
      id: 2,
      image: dos,
      name: "Mujer",
    },
    {
      id: 3,
      image: tres,
      name: "Hombre",
    },
    {
      id: 4,
      image: cuatro,
      name: "Mujer",
    },
  ];

  return (<div className={styles.pruebame}>
    <Swiper
      modules={[Navigation, Autoplay, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
      rewind={true}
    >
      {img.map((item) => (
        <SwiperSlide key={item.id} className={styles.sli}>
          <Image src={item.image} height={400} width={1000} alt="img" />
        </SwiperSlide>
      ))}
    </Swiper></div>
  );
};
