import { Container } from 'components/Container/Container.styled';
import {
  DeckWrapper,
  HeroBtn,
  HeroDescription,
  HeroPicture,
  HeroQuestion,
  HeroSection,
  HeroTitle,
  TextWrapper,
} from './Hero.styled';
import DeskImg1x from '../assets/img/hero-img-desk.png';
import DeskImg2x from '../assets/img/hero-img-deck@2.png';
import TabImg1x from '../assets/img/hero-img-tab.png';
import TabImg2x from '../assets/img/hero-img-tab@2.png';
import MobImg1x from '../assets/img/hero-img-mob.png';
import MobImg2x from '../assets/img/hero-img-mob@2.png';

function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroQuestion>diD yOu seE iT ?</HeroQuestion>
        <HeroTitle>YACHT APES</HeroTitle>
        <TextWrapper>
          <HeroQuestion>Apes aRe eveRywhere</HeroQuestion>
          <HeroPicture>
            <source
              media="(min-width: 1280px)"
              srcSet={`
          ${DeskImg1x} 1x,
          ${DeskImg2x} 2x
        `}
              width="463"
              height="612"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`
          ${TabImg1x} 1x,
          ${TabImg2x} 2x
        `}
              width="283"
              height="386"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`
          ${MobImg1x} 1x,
          ${MobImg2x} 2x
        `}
            />
            <img src={DeskImg1x} alt="monkey wearing glasses" />
          </HeroPicture>
          <DeckWrapper>
            <HeroBtn href="#mint">MEET APES</HeroBtn>
            <HeroDescription>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </HeroDescription>
          </DeckWrapper>
        </TextWrapper>
      </Container>
    </HeroSection>
  );
}

export default Hero;
