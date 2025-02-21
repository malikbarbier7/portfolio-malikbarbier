import React from 'react';

const TestArticle = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 lg:py-12 min-h-screen flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">The Rise and Fall of the Fossil Fuel Empire</h1>
      </header>


      <main className="flex-1 flex flex-col gap-6 lg:gap-8"> 
      <p>This is a test article about the rise and fall of the fossil fuel empire. It discusses the historical context, current challenges, and future prospects of fossil fuels in the global energy landscape.</p>
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

