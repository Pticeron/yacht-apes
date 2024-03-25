import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  ControllersWrapper,
  SwiperArea,
  SwiperBtn,
  SwiperImg,
} from './GallerySlyder.styled';
import { galleryData } from '../data/galery';

function GallerySlider() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTab = useMediaQuery({ maxWidth: 1279 });

  let slidesPerView = 4;

  if (isMobile) {
    slidesPerView = 1;
  } else if (isTab) {
    slidesPerView = 2;
  }

  return (
    <SwiperArea>
      <Swiper
        style={{ borderRadius: '12px' }}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        loop={false}
        navigation={{
          nextEl: '.custom_next',
          prevEl: '.custom_prev',
        }}
        modules={[Navigation]}
      >
        {galleryData.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperImg src={item.image} alt="Apes view" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
      <ControllersWrapper>
        <SwiperBtn
          type="button"
          className="custom_prev"
          aria-label="Previous slide"
        >
          Prev
        </SwiperBtn>
        <SwiperBtn
          type="button"
          className="custom_next"
          aria-label="Next slide"
        >
          Next
        </SwiperBtn>
      </ControllersWrapper>
    </SwiperArea>
  );
}

export default GallerySlider;
