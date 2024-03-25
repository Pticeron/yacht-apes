import { Container } from "components/Container/Container.styled";
import { Section } from "components/Section/Section.styled";
import { Title } from "components/Title/Title.styled";
import GallerySlider from "components/GallerySlider/GallerySlider";

function Arts() {
    return (
      <Section id="arts">
        <Container>
          <Title>COLLECTION</Title>
          <GallerySlider />
        </Container>
      </Section>
    );
  }
  
  export default Arts;