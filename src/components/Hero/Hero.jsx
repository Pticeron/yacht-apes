import heroImg from '../assets/img/img1.png';
import {
  Container,
  HeroImg,
  Section,
  Handwriting,
  Title,
  Button,
  Text,
  TwoHandwritihg,
  
} from './Herostyled';

export const Hero = () => {


  return (
    <Container>
      <Section>
        <Handwriting>diD yOu seE iT ?</Handwriting>
        <Title>YACHT APES
          </Title>
        <TwoHandwritihg>Apes aRe eveRywhere</TwoHandwritihg>
        <div>
          <HeroImg src={heroImg} alt="HeroImage"></HeroImg>
        </div>
        <Button type="button">MEET APES</Button>
        <Text>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </Text>
      </Section>
    </Container>
  );
};
