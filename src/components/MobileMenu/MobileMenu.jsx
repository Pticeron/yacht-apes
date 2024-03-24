import scrollLock from 'scroll-lock';
import React, { useState, useEffect } from 'react';
import {
  Backdrop,
  BottomPart,
  MobileMenuBtn,
  Modal,
  ModalContent,
  ModalHeader,
  ModalItem,
  ModalList,
  MenuItem,
  MenuList,
} from './MobileMenu.styled';
import discord from '../assets/img/discord.svg';
import opensea from '../assets/img/opensea.svg';
import twitter from '../assets/img/twitter.svg';

export const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [activeSection, setActiveSection] = useState('');

  const handleModalClose = () => {
    setIsMobileMenuOpen(false);
    scrollLock.clearQueueScrollLocks();
    scrollLock.enablePageScroll();
  };

  useEffect(() => {
    const sectionIds = ['about', 'm-map', 'faq', 'arts', 'mint'];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop - 50 <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Backdrop $isOpen={isMobileMenuOpen ? 'open' : 'close'}>
      <Modal
        $isOpen={isMobileMenuOpen ? 'open' : 'close'}
        className="container"
      >
        <ModalContent>
          <ModalHeader>
            {/* <LogoLink to="/" aria-label="Logo link to main page">
            <Logo />
          </LogoLink> */}
            <MenuList>
              <MenuItem>
                <MobileMenuBtn
                  onClick={handleModalClose}
                  aria-label="button for closing menu"
                >
                  CLOSE
                </MobileMenuBtn>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="a link to the company's Discord page"
                >
                  <img src={discord} alt="Discord">
                    "Discord"
                  </img>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://opensea.io/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="a link to the company's Opensea page"
                >
                  <img src={opensea} alt="Opensea">
                    "Opensea"
                  </img>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="a link to the company's Twitter page"
                >
                  <img src={twitter} alt="Twitter">
                    "Twitter"
                  </img>
                </a>
              </MenuItem>
            </MenuList>
          </ModalHeader>
          <ModalList>
            <ModalItem>
              <a
                href="#about"
                onClick={handleModalClose}
                className={activeSection === 'about' ? 'active' : ''}
              >
                ABOUT
              </a>
            </ModalItem>
            <ModalItem>
              <a
                href="#m-map"
                onClick={handleModalClose}
                className={activeSection === 'm-map' ? 'active' : ''}
              >
                M-MAP
              </a>
            </ModalItem>
            <ModalItem>
              <a
                href="#faq"
                onClick={handleModalClose}
                className={activeSection === 'faq' ? 'active' : ''}
              >
                FAQ
              </a>
            </ModalItem>
            <ModalItem>
              <a
                href="#arts"
                onClick={handleModalClose}
                className={activeSection === 'arts' ? 'active' : ''}
              >
                ARTS
              </a>
            </ModalItem>
            <ModalItem>
              <a
                href="#mint"
                onClick={handleModalClose}
                className={activeSection === 'mint' ? 'active' : ''}
              >
                MINT
              </a>
            </ModalItem>
          </ModalList>
          <BottomPart>{/* <Footer /> */}</BottomPart>
        </ModalContent>
      </Modal>
    </Backdrop>
  );
};
