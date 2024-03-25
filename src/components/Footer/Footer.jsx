import { Container } from 'components/Container/Container.styled';
import { FooterSection, Copyright } from './Footer.styled';

function Footer() {
  return (
    <FooterSection>
      <Container>
        <Copyright>&copy; Yacht ape 2024 all rights reserved</Copyright>
      </Container>
    </FooterSection>
  );
}

export default Footer;
