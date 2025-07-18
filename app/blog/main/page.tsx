import React from 'react';
import Link from 'next/link';

const TestArticle = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 lg:py-12 min-h-screen flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <nav className="flex gap-4 mt-0 mb-10">
          <Link href="/" className="text-neutral-700 hover:underline">home</Link>
          <Link href="/blog/main" className="text-neutral-700 hover:underline">blog</Link>
        </nav>
        <h1 className="font-caption text-2xl lg:text-3xl font-bold">Blog</h1>
      </header>

      <main className="flex-1 flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-caption text-lg lg:text-xl font-bold">Energy</h2>
          <ul className="list-disc list-inside">
            <li>
              <span>The Rise and Fall of the Fossil Fuel Empire</span>
              <Link href="/blog/the-rise-and-fall-of-the-fossil-fuel-empire" className="text-blue-500 font-semibold hover:underline"> - read</Link>
            </li>
          </ul>

          <h2 className="font-caption text-lg lg:text-xl font-bold">Philosophy</h2>
          <ul className="list-disc list-inside">
            <li>
              <span>My Biggest Fear : Am I a Robot, an AI ?</span>
              <Link href="/blog/my-biggest-fear-am-i-a-robot" className="text-blue-500 font-semibold hover:underline"> - read</Link>
            </li>
          </ul>

          <h2 className="font-caption text-lg lg:text-xl font-bold">Miscellaneous</h2>
          <ul className="list-disc list-inside">
            <li>
              <span>Glitch: How to Get the Best Grades in School (and Be Top of Your Class) Without Cheating</span>
              <Link href="/blog/how-to-get-the-best-grades-in-school" className="text-blue-500 font-semibold hover:underline"> - read</Link>
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
};

export default TestArticle;
