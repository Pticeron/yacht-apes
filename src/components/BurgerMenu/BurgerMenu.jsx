import { useState } from 'react';
import {
  BurgerList,
  BurgerItem,
  NavMenu,
  MenuItem,
  MenuBtn,
  MenuList,
} from './BurgerMenu.styled';
import { MobileMenuBtn } from 'components/MobileMenu/MobileMenu.styled';
import { Discord, Opensea, Twitter } from 'components/assets/img/icons/Icons';

function BurgerMenu ({ isScrolled, handleModalOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <NavMenu $scroll={isScrolled ? 'true' : 'false'}>
      <BurgerList $isOpen={isMenuOpen ? 'open' : 'close'}>
        <BurgerItem>
          <a
            href="#about"
            aria-label="link scroll to the About section"
            onClick={handleMenuToggle}
          >
            ABOUT
          </a>
        </BurgerItem>
        <BurgerItem>
          <a
            href="#m-map"
            aria-label="link scroll to the M-map section"
            onClick={handleMenuToggle}
          >
            M-MAP
          </a>
        </BurgerItem>
        <BurgerItem>
          <a
            href="#faq"
            aria-label="link scroll to the FAQ section"
            onClick={handleMenuToggle}
          >
            FAQ
          </a>
        </BurgerItem>
        <BurgerItem>
          <a
            href="#arts"
            aria-label="link scroll to the Arts section"
            onClick={handleMenuToggle}
          >
            ARTS
          </a>
        </BurgerItem>
        <BurgerItem>
          <a
            href="#mint"
            aria-label="link scroll to the Mint section"
            onClick={handleMenuToggle}
          >
            MINT
          </a>
        </BurgerItem>
      </BurgerList>
      <MenuList $isOpen={isMenuOpen ? 'open' : 'close'}>
        <MenuItem>
          <MobileMenuBtn
            type="button"
            aria-label="button for opening menu"
            onClick={handleModalOpen}
          >
            MENU
          </MobileMenuBtn>
          <MenuBtn type="button" onClick={handleMenuToggle}>
            {isMenuOpen ? 'CLOSE' : ' MENU'}
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Discord page"
          >
              <Discord />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Opensea page"
          >
             <Opensea />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Twitter page"
          >
            <Twitter />
          </a>
        </MenuItem>
      </MenuList>
    </NavMenu>
  );
};

export default BurgerMenu;