import heroImg from '../assets/img/img1.png'
import { HeroImg, Section, Handwriting, Title } from './Herostyled'
import { Container } from 'components/Container/Container'

export const Hero = () => {
    return (
        <Container>
            <Section>
            <Handwriting>diD yOu seE iT ?</Handwriting>
            <Title>YACHT APES</Title>
            <Handwriting>Apes aRe eveRywhere</Handwriting>
            <div>
            <HeroImg src={ heroImg } alt="HeroImage"></HeroImg>
            </div>
            <button>MEET APES</button>
            <p>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
        </Section>
        </Container>
        
    )
}