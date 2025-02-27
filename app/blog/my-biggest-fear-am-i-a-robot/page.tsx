import React from 'react';

const TestArticle = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 lg:py-12 min-h-screen flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">My Biggest fear : Am I a Robot, an AI?</h1>
      </header>

      <main className="flex-1 flex flex-col gap-6 lg:gap-8"> 
        <p>I often wonder where my thoughts come from. Do they emerge from nothing, or are they simply the result of an ultra-complex physiological process? If it's purely physiological, what really differentiates us from a machine? After all, our body is a biological machine, perhaps the most sophisticated one that exists. Our brain acts as the processor, and our neurons, as transistors.</p>
        <p>But if we are just biological machines, does that mean we are entirely programmed, with no real control over our destiny?</p>
        
        <h2 className="text-xl font-semibold">Determinism: Are We Just Programs?</h2>
        <p>Let's take an example: imagine a small mouse robot. It can move forward, turn left or right. You place it in a maze with billions of possible paths. If you give it certain rules and a basic program, it will explore, learn, and potentially find an exit. But deep down, every move it makes is the result of an algorithm and initial parameters. Are we humans really that different?</p>
        <img src="/img/article2/mouse_black_and_white_drawing__mouse_in_front_of_a_big_labyrinth.png" alt="mouse" className="w-2/4 h-auto mt-4 mx-auto" />
        <p>Our decisions seem free, but if you look closer, they are often the result of a chain of events and external conditions. Our choices are influenced by our upbringing, environment, biology... Could the illusion of free will just be a byproduct of a hyper-complex brain?</p>

        <h2 className="text-xl font-semibold">Determinism vs Free Will: Two Worldviews</h2>
        <p>Two major visions clash:</p>
        <ul className="list-disc ml-4">
          <li>The <b>determinism</b> view claims that everything that happens, including our thoughts and decisions, is the result of prior causes. In this view, everything is written in advance, even if we are unaware of the script. This idea dates back to thinkers like Baruch Spinoza, who saw the universe as a completely determined system, where every event is linked to a specific cause.</li>
          <li>On the other hand, <b>free will</b> argues that we have true decision-making power, independent of external influences. We are not just biological machines on autopilot. Philosophers like Jean-Paul Sartre defended this idea, asserting that we are "condemned to be free," meaning responsible for our choices, even in an absurd world.</li>
        </ul>
        <p>But if everything is determined, even the fact of contemplating this question was already determined. This is where it gets dizzying.</p>

        <h2 className="text-xl font-semibold">Cartesian Dualism: A Questioned Vision</h2>
        <p>René Descartes, in his famous "Cogito ergo sum" ("I think, therefore I am"), laid the foundation for a radical distinction between mind and body. For Descartes, the mind (or soul) was an immaterial substance, distinct from the body, which was a biological machine. This distinction, known as Cartesian dualism, dominated philosophy for centuries. However, modern discoveries in neuroscience and brain chemistry suggest that Descartes was probably wrong.</p>
        <p>Today, we know that our thoughts, emotions, and even our consciousness seem to emerge from physical and chemical processes in the brain. Neurotransmitters, synapses, and neural networks play a key role in shaping our mental states. For example, a chemical imbalance can alter our mood or perception of reality, as seen in depression or schizophrenia. These discoveries challenge the idea of an immaterial mind separate from the body.</p>
        <p>Descartes proposed that the mind and body interact in the pineal gland, a theory that seems naive today in light of the brain's complexity. If everything we consider to be "mind" can be explained by physical processes, then the distinction between mind and matter fades. This reinforces the idea that we could ultimately be ultra-sophisticated biological machines.</p>

        <h2 className="text-xl font-semibold">How to Live With This Question?</h2>
        <p>Sometimes, I sit back and try to take a step back. Do I really choose where I'm going? Are my ambitions, dreams, regrets truly "mine," or are they just the product of everything that has come before me? Even the act of asking these questions may be determined.</p>
        <p>But in the end, does it really matter? Whether we are free or not, what matters is to live positive experiences, feel emotions, appreciate the beauty of the world and human relationships. Rather than getting lost in the anxiety of not being in control, we can simply choose (or be determined to choose) to adopt a life philosophy that allows us to find peace. After all, whether our path is already mapped out or not, we might as well walk it with curiosity and joy.</p>

        <h2 className="text-xl font-semibold">Conclusion: Between Machines and Consciousness</h2>
        <p>The question of whether we are robots or conscious beings remains open. Advances in neuroscience and artificial intelligence blur the boundaries between humans and machines, while philosophy continues to remind us that consciousness may be one of the greatest mysteries of existence. Whether we embrace determinism, free will, or reject Cartesian dualism in light of scientific discoveries, what matters is perhaps to keep questioning, exploring, and living this unique experience of being conscious.</p>
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

