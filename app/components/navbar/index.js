"use client";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { navbarItens } from "./config/arrays";
import { LuSun } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import { GiAbstract020 } from "react-icons/gi";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Start the animation after component mounts
    setIsShowing(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Transition
      show={isShowing}
      enter="transition-all duration-700 ease-out"
      enterFrom="-translate-y-full"
      enterTo="translate-y-0"
      leave="transition-all duration-700 ease-in"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-full"
    >
      <nav className="fixed w-full p-4 border-b border-[#6F4E37] dark:border-primary-light bg-primary-light dark:bg-primary-dark z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[#724E2C] dark:text-primary-light font-bold flex items-center gap-1">
            <GiAbstract020 className="size-5" /> Portfolio
          </div>
          <div className="space-x-6 flex items-center">
            {navbarItens.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group transition duration-300 text-aux-light font-semibold text-sm dark:text-primary-light dark:hover:text-feature hover:text-feature"
              >
                {item.title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-primary-light bg-[#724E2C]"></span>
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-md bg-[#724E2C] hover:bg-primary-dark hover:dark:bg-primary-light dark:bg-[#724E2C]  ease-in-out transition-all"
            >
              {darkMode ? (
                <LuSun className="text-aux-light" />
              ) : (
                <LuMoonStar className="text-aux-dark" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </Transition>
  );
};

export default Navbar;
