import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Mousewheel,
  FreeMode,
  Keyboard,
  Pagination,
} from "swiper/modules";
import InvCard from "./InvCard";

import "swiper/css/bundle";
import "./styles.css";

export default (props) => {
  const projects = props.data;
  return (
    <Swiper
      breakpoints={{
        650: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        1030: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        1410: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      mousewheel={{
        enabled: true,
        sensitivity: 2,
      }}
      freeMode={true}
      // loop={true}
      modules={[Keyboard, Pagination, Navigation, Mousewheel, FreeMode]}
    >
      {projects.map((project, index) => (
        <SwiperSlide>
          <InvCard data={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
