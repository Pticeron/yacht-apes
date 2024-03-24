import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import { Title } from 'components/Title/Title.styled';
import Gallery from 'components/Gallery/Gallery';
import MindSlider from 'components/MindSlider/MindSlider';

function MindMap() {
  return (
    <Section id="m-map">
      <Container>
        <Title>Mind Map</Title>
        <MindSlider />
        <Gallery />
      </Container>
    </Section>
  );
}

export default MindMap;
