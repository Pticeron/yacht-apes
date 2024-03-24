import cardsData from '../../data/m-map.json';
import { UpLeftArrow } from '../assets/img/icons/Icons';
import {
  Card,
  CardText,
  CardTitle,
  Container,
  LinkCard,
} from './Galery.styled';

function Gallery() {
  return (
    <Container>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardText>{card.text}</CardText>
          <CardTitle>{card.title}</CardTitle>
        </Card>
      ))}
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
    </Container>
  );
}

export default Gallery;
