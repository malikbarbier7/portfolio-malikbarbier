import React from 'react';
import Image from 'next/image';

const TestArticle = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 lg:py-12 min-h-screen flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">The Rise and Fall of the Fossil Fuel Empire</h1>
      </header>
  
      <main className="flex-1 flex flex-col gap-6 lg:gap-8">
        <p>Imagine this: our modern world, with its skyscrapers, airplanes, cars, and even your iPhone, exists because of ancient plankton and plants that died millions of years ago. These organisms were buried under layers of earth, transformed by heat and pressure, and eventually became the fossil fuels—coal, oil, and gas—that power our civilization today.</p>
  
        <h2 className="text-xl font-bold mt-6">Where Did Fossil Fuels Come From?</h2>
        <p>Coal comes from dead plants that piled up in swamps, got buried, and, over millions of years, turned into solid carbon-rich fuel.</p>
        <Image src="/img/article1/coal.png" alt="Coal" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" />
        <p>Oil and gas, on the other hand, come from tiny marine organisms like plankton. These settled on the ocean floor, got trapped under layers of sediment, and transformed into liquid and gas energy sources.</p>
        <Image src="/img/article1/oil.png" alt="Oil" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" />
        <h2 className="text-xl font-bold mt-6">The Explosion of Energy Consumption</h2>
        <p>For most of human history, energy use was pretty stable. People burned wood, used muscle power, and relied on wind and water. But everything changed in the 20th century, especially after World War II. Energy use skyrocketed with mass industrialization. We started digging up and burning fossil fuels like crazy, and this shaped the modern world as we know it.</p>
        <Image src="/img/article1/global-energy.png" alt="Energy" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" />
        <ul className="list-disc list-inside">
          <li>Coal use took off during the Industrial Revolution</li>
          <li>Oil became the king of energy after 1950, powering cars, factories, and entire economies.</li>
          <li>Nuclear energy started growing but never reached the dominance of fossil fuels.</li>
          <li>Since the 2000s, renewables like solar and wind have been rising, but they still make up a small fraction of total energy consumption.</li>
        </ul>
        <p>When I first saw the data on energy use, I was shocked. Even though we talk a lot about renewables, the reality is that fossil fuels still dominate our energy supply.</p>
  
        <h2 className="text-xl font-bold mt-6">How Fossil Fuels Changed Everything</h2>
        <p>Fossil fuels didn&apos;t just give us power—they changed how we live. Before, most people were farmers because growing food required a lot of human labor. In 1800, over 90% of the world&apos;s population lived in rural areas, and two-thirds of them worked in the fields.</p>
        <Image src="/img/article1/urban-and-rural-population.png" alt="urbanvsrural" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" />
        <p>Then came machines. With coal, oil, and gas, we replaced human and animal labor with tractors, engines, and factory machines. Farmers became more productive, fewer people needed to work in agriculture, and cities started booming. Today, most people live in urban areas and work in industries or services, not on farms.</p>
        <p>The service industry exploded, too. Take cars: when production increased, we didn't just need more factories—we needed people to sell, finance, insure, and advertise them. As a result, jobs in the service sector grew, even as industrial jobs declined.</p>
        <Image src="/img/article1/tertiarization.png" alt="tertiarization" width={600} height={400} className="w-full h-auto mt-4 mx-auto" />
        <p>With all this energy, life expectancy soared, populations exploded (from 1 billion in 1800 to over 8 billion today), and we got modern conveniences like transportation, heating, and the internet.</p>
        <p>It sounds amazing, right? So what&apos;s the catch?</p>
  
        <h2 className="text-xl font-bold mt-6">The Cracks in the System</h2>
        <p>Many people assume that human innovation and technology will guarantee perpetual growth, but I believe that energy is the true driving force behind civilization. Without affordable and abundant energy, industrial economies would struggle to function. It&apos;s not the technology that enables energy production, but rather energy that makes modern technology possible. Our technological advancements and progress have been made possible by the abundance of energy, not the other way around.</p>
  
        <h3 className="text-lg font-bold mt-4">Let's Talk About Oil</h3>
        <p>Oil, the most critical fossil fuel, is facing depletion. Conventional oil production peaked around 2005–2006, and what has prevented a sharp decline since then has been the rise of unconventional oil sources, such as U.S. tight oil and oil sands production. However, these sources come with significant limitations in terms of cost, energy efficiency, and environmental impact.</p>
        <Image src="/img/article1/world-oil-consumption.png" alt="oil-consumption" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" />
        <h3 className="text-lg font-bold mt-4">What's the Difference Between Conventional and Unconventional Oil?</h3>
        <p>Conventional oil refers to crude oil extracted using traditional methods from underground reservoirs that are relatively easy to access. It flows naturally or is pumped using vertical wells. This type of oil has been the backbone of global energy production for over a century. It is also of higher quality, requiring less processing to refine, making it cheaper and more efficient to use.</p>
        <p>Unconventional oil, on the other hand, comes from sources that are more difficult and expensive to extract. This includes oil sands, shale oil, and synthetic fuels derived from coal or natural gas. Shale oil, for example, is trapped in rock formations and requires energy-intensive methods like hydraulic fracturing (fracking) or horizontal drilling for extraction. These processes are costly, have lower energy returns, and often come with severe environmental consequences.</p>
        <Image src="/img/article1/drilling.png" alt="drilling" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" />
        <p>Even with new extraction methods, production is projected to decline significantly by 2050. The reality is that fossil fuels are not just becoming environmentally costly—they are becoming physically and economically scarce.</p>
  
        <h3 className="text-lg font-bold mt-4">The Declining Quality of Oil</h3>
        <p>Peak oil likely happened in 2018, but the real problem isn&apos;t just how much oil we have—it&apos;s that the quality of oil is deteriorating. Today, 40% of what we count as &quot;oil&quot; isn&apos;t actually crude oil but includes natural gas liquids and biofuels, which contain less energy per unit. This means we&apos;re producing more in volume but getting less usable energy overall.</p>
        <Image src="/img/article1/projection.png" alt="projection" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" />
        <p>At the same time, conventional oil fields are running dry, and new production—mainly from shale—declines rapidly and requires continuous drilling to maintain supply. The need for constant reinvestment makes it an unsustainable long-term solution.</p>
        <Image src="/img/article1/USoil.png" alt="USoil" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" /> 
        <p>A critical factor in this equation is EROEI (Energy Returned on Energy Invested). In the past, conventional oil had an EROEI of 30:1 or higher, meaning we obtained 30 units of energy for every 1 unit invested in extraction. By contrast, shale oil has an EROEI of around 5:1, making it far less efficient. The lower this ratio, the less net energy is available to power the economy.</p>
        <h3 className="text-lg font-bold mt-4">Can Renewables Replace Oil?</h3>
        <p>Some argue that renewable energy can replace oil, but this isn&apos;t entirely true. While solar and wind can generate electricity, most oil consumption is in transportation, agriculture, and industry—sectors that require liquid fuels. Heavy-duty transport like airplanes, cargo ships, and industrial machinery cannot be easily electrified with current technology. The share of electricity in global final energy consumption was only 23.6% in 2023 and has remained broadly stable.</p>
        <p>Renewables are excellent for powering homes, offices, and some industrial processes, but they do not provide the same energy density and storage capacity as oil. Without a large-scale transformation of energy infrastructure and consumption habits, the transition away from fossil fuels will be anything but smooth.</p>
  
        <h2 className="text-xl font-bold mt-6">The Economic and Social Consequences of Decline</h2>
        <p>Throughout history, economic prosperity has been tied to energy availability, while energy shortages have led to recessions and social unrest. Our financial system relies on constant growth, but without enough energy, that growth becomes unsustainable. GDP is closely linked to oil consumption, as oil powers food production, manufacturing, and nearly every aspect of daily life. Higher oil consumption often signals economic growth, while a decline can indicate a slowdown or shift to alternative energy sources.</p>
        <Image src="/img/article1/GDP-OIL.png" alt="GDP" width={600} height={400} className="w-3/4 h-auto mt-4 mx-auto" />
       <p>As energy supplies shrink, economies struggle, leading to inflation, job losses, and geopolitical instability. Countries will likely compete more aggressively for remaining resources, potentially leading to economic crises and conflicts.</p>
        <p>The transition away from fossil fuels will require adaptation. Some nations may invest in local energy solutions, while others may face economic decline and political turmoil.</p>
  
        <h2 className="text-xl font-bold mt-6">And I'm Not Even Raising the Climate Issue…</h2>
        <p>This discussion hasn&apos;t even touched on the climate crisis, which adds another layer of urgency to the energy dilemma. Reducing emissions while maintaining economic stability is an enormous challenge, and delaying action only makes the transition harder.</p>
  
        <h2 className="text-xl font-bold mt-6">What Comes Next? Navigating the Future</h2>
        <p>The end of fossil fuel dominance does not mean the end of civilization, but it does mean we must rethink how we live, work, and consume. A sustainable future requires a fundamental shift in our priorities:</p>
        <ul className="list-disc pl-6">
          <li><strong>Efficiency and Sobriety:</strong> Reducing waste and unnecessary consumption will be essential as energy availability declines.</li>
          <li><strong>Renewable Energy and Local Solutions:</strong> While renewables cannot fully replace fossil fuels at current levels of consumption, they will play a crucial role in powering a restructured economy.</li>
          <li><strong>Redesigning Economic Models:</strong> Moving beyond GDP growth as the sole measure of success will be necessary for creating a resilient society within planetary limits.</li>
          <li><strong>Cultural Shifts:</strong> Moving from a mindset of limitless expansion to one of stewardship and sufficiency is perhaps the biggest challenge ahead.</li>
        </ul>
  
        <h2 className="text-xl font-bold mt-6">Conclusion: A Future Beyond Fossil Fuels</h2>
        <p>Our modern world was built on the back of fossil fuels, but the era of cheap energy is coming to an end. Whether we face a chaotic collapse or a managed transition depends on how quickly we recognize the stakes and take action. What comes next is not just about new technologies—it&apos;s about redefining our relationship with energy, resources, and each other.</p>
      </main>

      <div className="flex flex-col gap-4">
        <h2 className="font-caption text-lg lg:text-xl font-bold">Sources</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://www.statista.com/statistics/1303368/coal-electricity-production-share-in-china/#:~:text=Coal%20power%20production%20share%20in%20China%202000%2D2023&text=Coal%20accounted%20for%20nearly%2061,5%2C700%20terawatt%20hours%20in%202023." target="_blank" className="text-blue-600 hover:underline">
              Statista - Share of electricity production from coal in China (2000-2023)
            </a>
          </li>
          <li>
            Delannoy, Louis; Longaretti, Pierre-Yves; Murphy, David J.; Prados, Emmanuel (December 15, 2021). 
            "Peak oil and the low-carbon energy transition: A net-energy perspective". 
            <i>Applied Energy</i>, 304: 117843. DOI: 
            <a href="https://doi.org/10.1016/j.apenergy.2021.117843" target="_blank" className="text-blue-600 hover:underline">10.1016/j.apenergy.2021.117843</a>. ISSN 0306-2619.
          </li>
          <li>
            Michaux, Simon (2020). 
            "GTK Oil from a Critical Raw Material Perspective FINAL CC signatures". 
            DOI: <a href="https://doi.org/10.13140/RG.2.2.16253.31203" target="_blank" className="text-blue-600 hover:underline">10.13140/RG.2.2.16253.31203</a>.
          </li>
          <li>
            <a href="https://yearbook.enerdata.net/electricity/share-electricity-final-consumption.html" target="_blank" className="text-blue-600 hover:underline">
              Enerdata - Share of electricity in final consumption
            </a>
          </li>
          <li>
            <a href="https://ourworldindata.org/urbanization#:~:text=By%201800%2C%20still%2C%20over%2090,population%20lived%20in%20rural%20areas." target="_blank" className="text-blue-600 hover:underline">
              Our World in Data - Global urbanization throughout history
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=-EHCguJp9eQ" target="_blank" className="text-blue-600 hover:underline">
              YouTube Video - Additional source
            </a>
          </li>
        </ul>
      </div>

      <footer className="flex items-center gap-4 lg:gap-8 flex-wrap text-neutral-700">
        <a className="text-neutral-700 hover:underline" href="https://github.com/malikbarbier7/tomatotime/settings">Github</a>
        <a className="text-neutral-700 hover:underline" href="https://x.com/Malikbuilds">X</a>
        <a className="text-neutral-700 hover:underline" href="https://www.linkedin.com/in/malikbarbier/">LinkedIn</a>
      </footer>
    </div>
  );
};

export default TestArticle; 

