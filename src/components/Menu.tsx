"use client";

import { Button } from "./ui/button";
import { Menu as MenuIcon, X } from "lucide-react";

interface MenuProps {
  open: boolean;
  toggle: () => void;
}

const Menu = ({ open, toggle }: MenuProps) => {
  return (
    <Button className="md:hidden" variant="ghost" onClick={toggle}>
      {open ? <X /> : <MenuIcon />}
    </Button>
  );
};

export default Menu;
