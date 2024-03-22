import {
  Nav,
  List,
  ListItem,
  IconDiv,
  Icon,
  IconItem,
} from './Navigation.styled';
import Logo from '../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to="/about">ABOUT</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/m-map">M-map</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/faq">Faq</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/arts">ARTS</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/mint">MINT</NavLink>
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
