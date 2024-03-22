import {
  Nav,
  List,
  ListItem,
  IconDiv,
  Icon,
  IconItem,
  StyledLink
} from './Navigation.styled';
import Logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import game from '../assets/img/game.svg';
import yacht from '../assets/img/yacht.svg';
import twitter from '../assets/img/twitter.svg';

export const Navigation = () => {
  return (
    <>
      <Nav>
        <Link>
          <img src={Logo} alt="Logo"></img>
        </Link>
        <List>
          <ListItem>
            <StyledLink to="/about">ABOUT</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/m-map">M-map</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/faq">Faq</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/arts">ARTS</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/mint">MINT</StyledLink>
          </ListItem>
        </List>
        <IconDiv>
          <IconItem>
            <Icon src={game} alt="Game"></Icon>
          </IconItem>
          <IconItem>
            <Icon src={yacht} alt="Yacht"></Icon>
          </IconItem>
          <IconItem>
            <Icon src={twitter} alt="Twitter"></Icon>
          </IconItem>
        </IconDiv>
      </Nav>
    </>
  );
};
