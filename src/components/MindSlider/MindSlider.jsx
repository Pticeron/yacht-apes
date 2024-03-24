import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  Card,
  ControllersWrapper,
  LinkCard,
  SwiperArea,
  SwiperBtn,
} from './MindSlider.styled';
import { CardText, CardTitle } from '../Gallery/Galery.styled';
import cardsData from '../../data/m-map.json';
import { UpLeftArrow } from '../assets/img/icons/Icons';

function MindSlider() {
  let slidesPerView = 1;

  return (
    <SwiperArea>
      <Swiper
        style={{ borderRadius: '12px' }}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        loop={false}
        navigation={{
          nextEl: '.mind_custom_next',
          prevEl: '.mind_custom_prev',
        }}
        modules={[Navigation]}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardText>{card.text}</CardText>
              <CardTitle>{card.title}</CardTitle>
            </Card>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <LinkCard>
            <a
              href="https://academy.binance.com/en/articles/what-is-bored-ape-yacht-club-bayc/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <UpLeftArrow />
              <CardTitle>
                Learn <br />
                more <br />
                in mind map
              </CardTitle>
            </a>
          </LinkCard>
        </SwiperSlide>
      </Swiper>
      <ControllersWrapper>
        <SwiperBtn
          type="button"
          className="mind_custom_prev"
          aria-label="Previous slide"
        >
          Prev
        </SwiperBtn>
        <SwiperBtn
          type="button"
          className="mind_custom_next"
          aria-label="Next slide"
        >
          Next
        </SwiperBtn>
      </ControllersWrapper>
    </SwiperArea>
  );
}

export default MindSlider;
