import React from 'react';
import NavItemsLogo from './NavItemsLogo';
import NavItemsTitle from './NavItemsTitle';
import NavItemsText from './NavItemsText';
import './style.scss';

const NavItemsLinks = () => (
  <>
    <NavItemsTitle title="Valorant France" />
    <NavItemsLogo />
    <NavItemsText text="Agents" />
    <NavItemsText text="Tips & Tricks" />
    <NavItemsText text="News" />
  </>
);

export default NavItemsLinks;
