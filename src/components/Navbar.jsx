import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuFold3Line, RiCloseLine } from "react-icons/ri";
import Logo from "/logo.png";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link to="/">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="h-10 w-10" />
            <h1 className="text-sm md:text-lg font-bold">
              Unique Uniform Collection
            </h1>
          </div>
        </Link>
        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-6">
            <NavigationMenuItem>
              <Link to="/" className={cn("link", NavigationMenuLink)}>
                Add Bundle
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/inventory" className={cn("link", NavigationMenuLink)}>
                Inventory
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/reports" className={cn("link", NavigationMenuLink)}>
                Reports
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-red-500 focus:outline-none"
        >
          {menuOpen ? (
            <RiCloseLine className="w-6 h-6" />
          ) : (
            <RiMenuFold3Line className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block border-b-[1px] link font-medium p-1"
              onClick={handleMenuToggle}
            >
              Add Bundle
            </Link>
            <Link
              to="/inventory"
              className="block border-b-[1px] link font-medium p-1"
              onClick={handleMenuToggle}
            >
              Inventory
            </Link>
            <Link
              to="/reports"
              className="block border-b-[1px] link font-medium p-1"
              onClick={handleMenuToggle}
            >
              Reports
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
