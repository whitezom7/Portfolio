"use client"

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <img className="rounded-full w-10 h-10" src="https://avatars.githubusercontent.com/u/72764274?s=400&u=ab7c2922b9b0a6462f8939123dce237c0254073a&v=4" alt="image description"/>
            </a>
          </div>
          <nav className="md:ml-auto md:mr-6">
            <div className="relative">
              <button
                type="button"
                className="text-white hover:text-indigo-500 focus:outline-none focus:text-indigo-500"
                onClick={toggleMenu}
              >
                <span className="sr-only">Menu</span>
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-indigo-700 rounded-md overflow-hidden shadow-lg inline">
                  <div className="px-2 py-2 bg-blue-950" >

                    <a
                      className="block px-4 py-2 text-sm text-white hover:bg-indigo-500"
                      href="/"
                    >
                      About
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-white hover:bg-indigo-500"
                      href="/projects"
                    >
                      Projects
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-white hover:bg-indigo-500"
                      href="/blog"
                    >
                      Blogs
                    </a>
                    <a
                      className="block px-4 py-2 text-sm text-white hover:bg-indigo-500"
                      href="/contact"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}


