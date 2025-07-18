import React from 'react';

const TestArticle = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 lg:py-12 min-h-screen flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Glitch: How to Get the Best Grades in School (and Be Top of Your Class) Without Cheating</h1>
      </header>

      <main className="flex-1 flex flex-col gap-6 lg:gap-8">
        <p>For years, I was just an average student. Not bad, not great. Without putting in much effort, I consistently scored around 11 or 12 out of 20 throughout middle school and high school. I was coasting. But everything changed once I got to university. I started playing the game differently. Not by working harder than everyone else but by working smarter. And without cheating, without burning out, I ended up in the top 10% of my class. Here are the 3 simple techniques, almost like glitches in the system that helped me do it.</p>

        <h2 className="text-xl font-bold mt-6">1. Study the Class Before the Class</h2>
        <p>Most professors reuse their lectures every year. Same slides, same examples, same explanations, sometimes even the exact same wording.</p>
        <p>My first tactic was simple: get ahead. I got hold of notes from a student who had already taken the same classes the year before. Before each lecture, I would skim through the upcoming chapter. Five to ten minutes the night before that&apos;s all it took.</p>
        <p>Once I was in class, everything felt familiar. The professor&apos;s explanations sounded like d&eacute;j&agrave; vu. I could predict what was coming next. When they asked questions, I already had answers, not because I was a genius, but because I had seen it before. That made class participation feel natural, and my understanding much deeper. Some might call it cheating but to me, it&apos;s just being prepared.</p>

        <h2 className="text-xl font-bold mt-6">2. Past Exams Are a Cheat Code</h2>
        <p>Just like lectures, exams don&apos;t change much from year to year. Once I realized that, I started collecting previous years&rsquo; exams, sometimes even with answer keys or graded copies.</p>
        <p>What I found was simple: If you can solve last year&apos;s test, you&apos;ll most likely crush this year&apos;s. The numbers may change. The wording might be slightly different. But the structure, themes, and logic? Often exactly the same.</p>
        <p>So before finals, I&apos;d train with old exams. Not only was it the best prep, it also removed most of the surprise and stress. It was like rehearsing before a performance. And when the real show came, I was ready.</p>

        <h2 className="text-xl font-bold mt-6">3. Learn by Teaching: Smart Group Work</h2>
        <p>This last strategy is powerful and completely underrated: learn by teaching.</p>
        <p>Most people think group study means wasting time chatting with friends. But when done right, it becomes a massive accelerator. Here&rsquo;s how: You form a small group. Each person chooses a topic to study deeply. Then, when you meet, you teach each other.</p>
        <p>Explaining something out loud forces you to truly understand it. You can&rsquo;t fake it. You&rsquo;re forced to structure your thoughts and make sense of what you know.</p>
        <p>It also creates a feedback loop:</p>
        <ul className="list-disc pl-6">
          <li>If you can explain it clearly, you&rsquo;ve mastered it.</li>
          <li>If you get confused while talking, you know where you need to review.</li>
        </ul>
        <p>Bonus: it&rsquo;s more fun and way less isolating than studying alone.</p>
        
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
