import Image from "next/image";
import Hero from "./views/hero";
import About from "./views/about/page";
import Contact from "./views/contact/page";
import Projects from "./views/projects/page";
export default function Home() {
  return (
    <div
      id="home"
      className="bg-primary-light dark:bg-primary-dark items-center min-h-screen pt-28 flex flex-col"
    >
      <main className="flex flex-col w-full max-w-[98rem] space-y-10  items-start">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
