import React from 'react';
import NavItemsLogo from './NavItemsLogo';
import NavItemsTitle from './NavItemsTitle';
import NavItemLink from './NavItemLink';
import './style.scss';

const NavItemsLinks = () => (
  <>
    <NavItemsTitle title="Valorant France" route="/" />
    <NavItemsLogo />
    <NavItemLink text="Agents" route="/agents" />
    <NavItemLink text="Tips & Tricks" route="/tips-and-tricks" />
    <NavItemLink text="News" route="/news" />
  </>
);

export default NavItemsLinks;
