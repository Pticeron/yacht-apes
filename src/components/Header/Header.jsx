import { useEffect, useState } from 'react';
import scrollLock from 'scroll-lock';
import BurgerMenu  from 'components/BurgerMenu/BurgerMenu';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import {
  HeaderContainer,
  HeaderSection,
  LogoLink
} from './Header.styled';
import { Logo } from 'components/assets/img/icons/Icons';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 48);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleModalOpen = () => {
    setIsMobileMenuOpen(true);
    scrollLock.disablePageScroll(document.body);
  };

  return (
    <>
    <HeaderSection>
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <HeaderContainer>
          <LogoLink to="/" aria-label="Logo link to main page">
            {!isScrolled && < Logo />}
          </LogoLink>
          <BurgerMenu
            isScrolled={isScrolled}
            handleModalOpen={handleModalOpen}
          />
        </HeaderContainer>
      </div>
    </HeaderSection>
    <MobileMenu
      isMobileMenuOpen={isMobileMenuOpen}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
    />
  </>
    );
};

export default Header;