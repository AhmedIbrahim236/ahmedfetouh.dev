"use client";
import Toggle from "./Toggle";
import Nav from "./Nav";
import Logo from "./Logo";
import Menu from "./Menu";
import { useState, useEffect, useCallback } from "react";

const Header = () => {
  const [top, setTop] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  const handleScroll = useCallback(() => setTop(window.scrollY === 0), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        top
          ? "bg-transparent py-4"
          : "bg-background/80 backdrop-blur-lg shadow-sm py-2"
      }`}
    >
      <div className="container mx-auto flex items-center px-8 justify-between">
        <Logo />
        <div className="flex gap-6 items-center">
          <Nav open={open} />
          <Toggle />
          <Menu open={open} toggle={toggle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
