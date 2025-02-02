"use client";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

const Hero = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [devText, setDevText] = useState("");
  const [nameText, setNameText] = useState("");
  const [isNameComplete, setIsNameComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsShowing(true);

    const animateName = async () => {
      const name = "Deilton Pedro";
      await new Promise((resolve) => setTimeout(resolve, 300)); // 1 segundo de delay
      for (let i = 0; i < name.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setNameText((prev) => name.slice(0, i + 1));
      }
      setIsNameComplete(true);
    };

    animateName();

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 1000);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Transition
      show={isShowing}
      enter="transition-all duration-700 ease-out"
      enterFrom="translate-y-1/4 opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition-all duration-700 ease-in"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="translate-y-1/4 opacity-0"
    >
      <section className="min-h-full w-full flex items-start">
        <div className="container px-4">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-6xl font-bold text-aux-light flex items-center space-y-4">
              {nameText}
              <span
                className={`ml-1 inline-block w-0.5 h-12 bg-aux-light dark:bg-aux-dark transition-opacity duration-0 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </h1>
            <div className="flex items-center text-2xl text-aux-light dark:text-aux-dark ">
              &lt;developer&gt;
            </div>
            <p className="text-lg text-aux-light dark:text-aux-dark ">
              Turning coffee into code and making sick digital experiences.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 bg-aux-light dark:bg-aux-dark text-primary-light dark:text-primary-dark rounded-lg font-medium hover:opacity-90 transition-opacity">
                View Projects
              </button>
              <button className="px-6 py-3 border-2 border-aux-light dark:border-aux-dark text-aux-light dark:text-aux-dark rounded-lg font-medium hover:bg-aux-light hover:bg-opacity-10 transition-all">
                Contact
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/assets/—Pngtree—flying cup of coffee with_5057949.png" // Caminho público da imagem
          width={500}
          height={500}
          alt="Flying cup of coffee"
        />
      </section>
    </Transition>
  );
};

export default Hero;
