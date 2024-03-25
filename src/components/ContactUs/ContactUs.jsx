import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import { Title } from 'components/Title/Title.styled';
import { AddSharp }from '../assets/img/icons/Icons';
import { MindText, MindWrapper } from './ContactUs.styled';

function Mint() {
  return (
    <Section id="mint">
      <Container>
        <Title>Are you in?</Title>
        <MindWrapper>
          <AddSharp />
          <MindText>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </MindText>
          {/* <ContactForm /> */}
        </MindWrapper>
      </Container>
    </Section>
  );
}

export default Mint;
