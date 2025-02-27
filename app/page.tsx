import Image from "next/image";
import clsx from 'clsx';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 lg:py-12 min-h-screen flex flex-col gap-12">
      <header className="flex flex-col gap-4">
      <nav className="flex gap-4 mt-0 mb-10">
            <a href="/" className="text-neutral-700 hover:underline">home</a>
            <a href="/blog/main" className="text-neutral-700 hover:underline">blog</a>
        </nav>
        <h1 className="font-caption text-2xl lg:text-3xl font-bold"> Malik Barbier</h1>
      </header>
      <p>
        👋 Hi, I'm @malik <br />
        👀 I'm interested in tech, environment, aviation, art, photography, philosophy...<br />
        🌱 I'm currently a data Analyst but I am also coding random stuff as a hobby <br />
        ✍️ I also like to write about my interests
      </p>

      <main className="flex-1 flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-caption text-lg lg:text-xl font-bold">Projects</h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Cute pomodoro timer </span>
              <a className="text-blue-500 font-semibold hover:underline" href="https://github.com/malikbarbier7/tomatotime">Tomato Time</a>
              <span className="text-neutral-700"> 2024</span>
            </li>

            <li>
              <span className="font-semibold">To do list app </span>
              <a className="text-blue-500 font-semibold hover:underline" href="https://github.com/malikbarbier7/better-todo">Better To-do</a>
              <span className="text-neutral-700"> 2024</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-caption text-lg lg:text-xl font-bold">Writings</h2>
          <ul className="list-disc list-inside">

            <li>
              <span className="font-semibold">Check my </span>
              <a className="text-blue-500 font-semibold hover:underline" href="/blog/main">blog</a>
              <span className="text-neutral-700"></span>
            </li>
          </ul>
        </div>

      </main>

      <footer className="flex items-center gap-4 lg:gap-8 flex-wrap text-neutral-700">
        <a className="text-neutral-700 hover:underline" href="https://github.com/malikbarbier7/tomatotime/settings">Github</a>
        <a className="text-neutral-700 hover:underline" href="https://x.com/Malikbuilds">X</a>
        <a className="text-neutral-700 hover:underline" href="https://www.linkedin.com/in/malikbarbier/">LinkedIn</a>
      </footer>
    </div>
  );
}
