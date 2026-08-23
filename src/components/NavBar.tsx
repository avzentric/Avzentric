"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img
                src='/avzentriclogo.jpeg'
                alt="Avzentric"
                className="h-9 w-9 sm:h-20 sm:w-27"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="
                text-sm
                lg:text-base
                font-medium
                transition-colors
                text-foreground
                hover:text-primary
              "
            >
              Home
            </a>

            <a
              href="#services"
              className="
                text-sm
                lg:text-base
                font-medium
                transition-colors
                text-foreground
                hover:text-primary
              "
            >
              Services
            </a>

            <a
              href="#about"
              className="
                text-sm
                lg:text-base
                font-medium
                transition-colors
                text-foreground
                hover:text-primary
              "
            >
              About Us
            </a>

            <a
              href="#works"
              className="
                text-sm
                lg:text-base
                font-medium
                transition-colors
                text-foreground
                hover:text-primary
              "
            >
              Our Works
            </a>

            <a
              href="#contact"
              className="
                text-sm
                lg:text-base
                font-medium
                transition-colors
                text-foreground
                hover:text-primary
              "
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <a
              href="#home"
              className="
                block
                py-2
                text-base
                font-medium
                transition-colors
                hover:text-primary
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="
                block
                py-2
                text-base
                font-medium
                transition-colors
                hover:text-primary
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="
                block
                py-2
                text-base
                font-medium
                transition-colors
                hover:text-primary
              "
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#work"
              className="
                block
                py-2
                text-base
                font-medium
                transition-colors
                hover:text-primary
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </a>
            <a
              href="#contact"
              className="
                block
                py-2
                text-base
                font-medium
                transition-colors
                hover:text-primary
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}