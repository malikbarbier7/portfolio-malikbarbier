import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Eat Well, Live Longer: An Evidence-Based Guide | Malik Barbier",
  description: "What really helps you live longer? Diet, drinks, supplements, sleep and exercise, ranked by the strength of the scientific evidence.",
  openGraph: {
    type: "article",
    title: "Eat Well, Live Longer: An Evidence-Based Guide",
    description: "What really helps you live longer? Diet, drinks, supplements, sleep and exercise, ranked by the strength of the scientific evidence.",
    images: ["/img/eatwell/evidence-at-a-glance.png"],
  },
};

const TestArticle = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 lg:py-12 min-h-screen flex flex-col gap-12">
      <header className="flex flex-col gap-4">
        <nav className="flex gap-4 mt-0 mb-10">
          <Link href="/" className="text-neutral-700 hover:underline">home</Link>
          <Link href="/blog/main" className="text-neutral-700 hover:underline">blog</Link>
        </nav>
        <h1 className="text-3xl font-bold">Eat Well, Live Longer: An Evidence-Based Guide</h1>
        <p className="text-sm text-neutral-700">Last reviewed 3 October 2026</p>
      </header>

      <main className="flex-1 flex flex-col gap-6 lg:gap-8">
        <p className="text-lg">Most of what predicts a long, healthy life is unglamorous: plants on most plates, the right cooking oil, regular movement, enough sleep, and little alcohol. This guide sorts nutrition and lifestyle advice by how strong the evidence actually is, so you can spend your effort where it pays off.</p>

        <p><strong>How to read the evidence labels</strong></p>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li><strong>Strong</strong>: backed by randomised trials or large meta-analyses, and reflected in official guidelines.</li>
          <li><strong>Moderate</strong>: consistent observational data or smaller trials; likely true, size of effect uncertain.</li>
          <li><strong>Weak</strong>: early, small or mechanistic studies; reasonable to try, not worth worrying about.</li>
        </ul>

        <p className="text-sm text-neutral-700">This is general information for healthy adults, not medical advice. If you are pregnant, take regular medication or have a chronic condition, check changes with your doctor first.</p>

        <p className="text-sm text-neutral-700"><em>Editor&apos;s note: every study cited here links to its original publication. A few official reference values, marked †, are quoted from European, WHO and UK guidance and are still awaiting a final check against the source documents. They may be refined in a later update.</em></p>

        <figure className="flex flex-col gap-2">
          <Image src="/img/eatwell/evidence-at-a-glance.png" alt="Three columns grouping habits by evidence: strong (vegetables, whole grains, olive or rapeseed oil, less salt, processed meat and alcohol, regular activity, sleep), moderate, and weak or no added benefit." width={1344} height={700} className="w-full h-auto mx-auto" />
          <figcaption className="text-sm text-neutral-700 text-center">At a glance: habits from this guide, grouped by strength of evidence.</figcaption>
        </figure>

        <h2 id="your-plate" className="text-xl font-semibold">1. Your plate</h2>

        <p>A plate that is half vegetables and fruit, a quarter whole grains and a quarter protein covers most needs without counting anything. This is the model behind Harvard&apos;s <a href="https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Healthy Eating Plate</a>. <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: strong</span></p>

        <figure className="flex flex-col gap-2">
          <Image src="/img/eatwell/everyday-plate.png" alt="A plate divided into half vegetables and fruit, a quarter whole grains and a quarter protein, with olive or rapeseed oil and water, tea or coffee." width={1344} height={684} className="w-full h-auto mx-auto" />
          <figcaption className="text-sm text-neutral-700 text-center">The everyday plate, adapted from Harvard&apos;s Healthy Eating Plate.</figcaption>
        </figure>

        <p><strong>Make the grains whole.</strong> A Lancet series of meta-analyses (185 cohort studies, 58 trials) found that people eating the most fibre and whole grains had 15–30% lower mortality, heart disease, stroke and type 2 diabetes than those eating the least. The benefit kept rising up to about 25–29 g of fibre a day, a level most adults miss (<a href="https://doi.org/10.1016/S0140-6736(18)31809-9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reynolds 2019</a>).</p>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li>Swap white bread, white rice and plain pasta for wholemeal bread, brown rice, barley, oats, buckwheat or quinoa most of the time.</li>
          <li>Eat legumes (lentils, beans, chickpeas, peas) several times a week. They supply fibre and protein together.</li>
          <li>Frozen and canned vegetables count. Pick ones without added salt or sauce.</li>
        </ul>

        <p><strong>Keep ultra-processed food occasional.</strong> An umbrella review covering almost 10 million people linked high intake of ultra-processed food to 32 health outcomes. The most convincing links were cardiovascular death, type 2 diabetes, anxiety and common mental disorders (<a href="https://doi.org/10.1136/bmj-2023-077310" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lane 2024</a>). <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: moderate</span> (observational, but consistent).</p>

        <p>A useful test: if a product contains ingredients you would never use at home (emulsifiers, flavourings, modified starches, sweeteners), treat it as an occasional food, not a staple.</p>

        <h2 id="fats" className="text-xl font-semibold">2. Fats: choose the oil, not the fear</h2>

        <p>The type of fat matters more than the amount. Replacing saturated fat (butter, ghee, coconut oil, fatty meat) with unsaturated vegetable oils lowers LDL cholesterol and cardiovascular risk. <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: strong</span></p>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li>In randomised trials, swapping saturated fat for polyunsaturated vegetable oil cut cardiovascular events by about 30%, similar to a statin (<a href="https://doi.org/10.1161/CIR.0000000000000510" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AHA Presidential Advisory, Sacks 2017</a>).</li>
          <li>Coconut oil raised LDL cholesterol by about 10 mg/dL compared with non-tropical vegetable oils across 16 trials (<a href="https://doi.org/10.1161/CIRCULATIONAHA.119.043052" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Neelakantan 2020</a>).</li>
          <li>Higher blood levels of linoleic acid, the main omega-6 fat in seed oils, were linked to lower cardiovascular risk in 30 cohort studies of 68,659 people (<a href="https://doi.org/10.1161/CIRCULATIONAHA.118.038908" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Marklund 2019</a>). The claim that seed oils are inflammatory or toxic is not supported by human outcome data.</li>
        </ul>

        <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead><tr><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Use</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Best choices</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Use sparingly</th></tr></thead>
          <tbody>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Salads, drizzling</td><td className="border-b border-neutral-200 p-2 align-top">Extra virgin olive oil, rapeseed (canola) oil, walnut or flaxseed oil</td><td className="border-b border-neutral-200 p-2 align-top">—</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Everyday cooking and roasting</td><td className="border-b border-neutral-200 p-2 align-top">Olive oil, rapeseed oil</td><td className="border-b border-neutral-200 p-2 align-top">Butter, ghee, coconut oil</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Spreads</td><td className="border-b border-neutral-200 p-2 align-top">Soft vegetable-oil spreads, nut butters, avocado</td><td className="border-b border-neutral-200 p-2 align-top">Butter</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Snacks</td><td className="border-b border-neutral-200 p-2 align-top">Unsalted nuts and seeds, a handful a day</td><td className="border-b border-neutral-200 p-2 align-top">Salted, sugar-coated nuts</td></tr>
          </tbody>
        </table>
        </div>

        <p>Industrial trans fats are now capped in the EU (2 g per 100 g of fat since 2021†), so modern soft margarines are not the problem they were in the 1990s. Repeatedly reused frying oil and deep-fried fast food are still best kept rare.</p>

        <h2 id="protein" className="text-xl font-semibold">3. Protein: enough, and from the right places</h2>

        <p>Most adults need about 0.8 g of protein per kg of body weight a day; people over 65 do better with 1.0–1.2 g/kg to protect muscle (<a href="https://doi.org/10.1016/j.jamda.2013.05.021" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PROT-AGE 2013</a>). Spreading it across meals, roughly 25–30 g each, is an easy way to get there. <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: moderate</span></p>

        <p><strong>Lean on these most of the week:</strong> fish (especially oily fish twice a week), legumes, eggs, plain yogurt and other dairy, poultry, tofu and tempeh, nuts and seeds.</p>

        <p><strong>Limit red meat and avoid processed meat.</strong> The WHO cancer agency classifies processed meat (bacon, ham, salami, sausages) as carcinogenic to humans and red meat as probably carcinogenic, mainly for colorectal cancer (<a href="https://doi.org/10.1016/S1470-2045(15)00444-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IARC, Bouvard 2015</a>). Harvard&apos;s plate gives the same advice. <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: strong for processed meat</span></p>

        <p>A practical rule of thumb (not an official limit): no more than about three portions of red meat a week, and processed meat as an exception rather than a habit.</p>

        <h2 id="blood-sugar" className="text-xl font-semibold">4. Blood sugar: what actually moves the needle</h2>

        <p>A rise in blood sugar after eating is normal. For healthy people, the quality of carbohydrates and total diet matter far more than chasing a flat glucose curve. The tricks below are real but modest; they matter most if you have prediabetes or type 2 diabetes.</p>

        <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead><tr><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Strategy</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">What the studies found</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Evidence</th></tr></thead>
          <tbody>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Eat vegetables and protein before starch</td><td className="border-b border-neutral-200 p-2 align-top">Post-meal glucose about 50% lower when carbohydrate came last, in 16 adults with type 2 diabetes (<a href="https://doi.org/10.1136/bmjdrc-2017-000440" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Shukla 2017</a>; first study in 11 patients: <a href="https://doi.org/10.2337/dc15-0429" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Shukla 2015</a>). Not measured as clearly in healthy people.</td><td className="border-b border-neutral-200 p-2 align-top">Moderate (small trials)</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Cook, chill and reheat rice or potatoes</td><td className="border-b border-neutral-200 p-2 align-top">Chilled and reheated rice had 2.5× more resistant starch and an 18% lower glucose response in 15 adults (<a href="https://doi.org/10.6133/apjcn.2015.24.4.13" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sonia 2015</a>).</td><td className="border-b border-neutral-200 p-2 align-top">Weak to moderate</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Choose whole grains and legumes over refined starch</td><td className="border-b border-neutral-200 p-2 align-top">Lower risk of type 2 diabetes at higher fibre and whole-grain intake (<a href="https://doi.org/10.1016/S0140-6736(18)31809-9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reynolds 2019</a>).</td><td className="border-b border-neutral-200 p-2 align-top">Strong</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Time-restricted eating (eating window)</td><td className="border-b border-neutral-200 p-2 align-top">No better than ordinary calorie reduction for weight, fat or metabolic markers over 12 months in 139 adults with obesity (<a href="https://doi.org/10.1056/NEJMoa2114833" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Liu 2022</a>).</td><td className="border-b border-neutral-200 p-2 align-top">Strong (no extra benefit)</td></tr>
          </tbody>
        </table>
        </div>

        <p><strong>Snacks are not the enemy.</strong> If you are genuinely hungry between meals, a snack built on protein or fibre (yogurt, fruit with nuts, hummus with vegetables) is a sensible choice. What matters is what you snack on and how often you eat without being hungry.</p>

        <h2 id="drinks" className="text-xl font-semibold">5. Drinks</h2>

        <p>Water, coffee and tea are the best everyday drinks. Sugary drinks and alcohol are the two worth cutting back hardest.</p>

        <p><strong>Water.</strong> European reference values put total water needs at about 2.0 L a day for women and 2.5 L for men†, from all drinks and food combined; food supplies roughly a fifth. Drink to thirst, more in heat or during exercise. Pale-yellow urine is a reasonable everyday check.</p>

        <p><strong>Salt.</strong> There is no need to add salt to water. Adults already eat about 11 g of salt a day on average, more than twice the WHO limit of 5 g (<a href="https://www.who.int/news-room/fact-sheets/detail/sodium-reduction" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WHO</a>). Most of it comes from bread, cheese, processed meat, ready meals and sauces. <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: strong</span></p>

        <p><strong>Coffee.</strong> Up to 3–4 cups a day is associated with lower overall mortality and lower risk of several chronic diseases, across 201 meta-analyses (<a href="https://doi.org/10.1136/bmj.j5024" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Poole 2017</a>). Pregnant women should keep caffeine lower. Two timing points are well supported:</p>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li>Stop caffeine at least 6 hours before bed; 400 mg taken 6 hours before bedtime still cut sleep by about an hour (<a href="https://doi.org/10.5664/jcsm.3170" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Drake 2013</a>).</li>
          <li>Coffee and tea with a meal sharply reduce iron absorption from plant foods (−39% for coffee, −64% for tea), but not when drunk an hour before eating (<a href="https://doi.org/10.1093/ajcn/37.3.416" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Morck 1983</a>). This matters most for vegetarians and people prone to low iron.</li>
        </ul>

        <p><strong>Sugary and diet drinks.</strong> Fruit juice and sodas deliver sugar without the fibre of whole fruit; keep juice to a small glass at most. Sweetened “diet” drinks are better than sugary ones, but the WHO (2023) advises against relying on sweeteners for weight control.†</p>

        <p><strong>Alcohol.</strong> The idea that moderate drinking protects health has not held up. A 2023 meta-analysis of 107 studies and 4.8 million people found no protective effect from low intake once study biases were corrected. Mortality rose significantly from 25 g a day in women and 45 g a day in men (about 2 and 3.5 standard drinks) (<a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2802963" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Zhao 2023</a>). Alcohol also helps you fall asleep, then suppresses REM sleep and fragments the second half of the night (<a href="https://doi.org/10.1111/acer.12006" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ebrahim 2013</a>). <strong>Less is better; none is best.</strong></p>

        <h2 id="supplements" className="text-xl font-semibold">6. Supplements: for specific needs, not for everyone</h2>

        <p>A healthy adult eating a varied diet needs few supplements. The large trials have mostly been disappointing for people who were not deficient. Supplements earn their place for particular groups, at sensible doses.</p>

        <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead><tr><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Supplement</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Who may benefit</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Sensible dose</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Watch out for</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Evidence</th></tr></thead>
          <tbody>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Vitamin D</td><td className="border-b border-neutral-200 p-2 align-top">People with little sun (northern winters, covered skin, housebound), adults over 75, people with dark skin in low-sun countries</td><td className="border-b border-neutral-200 p-2 align-top">600–800 IU/day (800 IU after 70); higher only if prescribed</td><td className="border-b border-neutral-200 p-2 align-top">Upper safe limit 4,000 IU/day.† In healthy adults 19–74, the Endocrine Society advises against doses above reference intakes and against routine blood testing (<a href="https://academic.oup.com/jcem/article/109/8/1907/7685305" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Demay 2024</a>). 2,000 IU/day did not reduce cancer or heart events in 25,871 adults (<a href="https://doi.org/10.1056/NEJMoa1809944" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VITAL, Manson 2019</a>).</td><td className="border-b border-neutral-200 p-2 align-top">Strong (no benefit beyond need)</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Vitamin B12</td><td className="border-b border-neutral-200 p-2 align-top">Vegans, many vegetarians, people over 50, long-term metformin or acid-reducing drug users</td><td className="border-b border-neutral-200 p-2 align-top">Per product label or doctor&apos;s advice</td><td className="border-b border-neutral-200 p-2 align-top">Essential for vegans: plants provide none.</td><td className="border-b border-neutral-200 p-2 align-top">Strong</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Folic acid</td><td className="border-b border-neutral-200 p-2 align-top">Anyone who could become pregnant</td><td className="border-b border-neutral-200 p-2 align-top">400 µg/day, before conception and in early pregnancy</td><td className="border-b border-neutral-200 p-2 align-top">Standard prenatal advice.</td><td className="border-b border-neutral-200 p-2 align-top">Strong</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Creatine monohydrate</td><td className="border-b border-neutral-200 p-2 align-top">Adults doing strength training; older adults aiming to keep muscle</td><td className="border-b border-neutral-200 p-2 align-top">3–5 g/day</td><td className="border-b border-neutral-200 p-2 align-top">Safe in healthy people; check with a doctor if you have kidney disease (<a href="https://doi.org/10.1186/s12970-017-0173-z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ISSN, Kreider 2017</a>). Brain benefits are still preliminary.</td><td className="border-b border-neutral-200 p-2 align-top">Strong for muscle</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Omega-3 (EPA + DHA)</td><td className="border-b border-neutral-200 p-2 align-top">People who eat no oily fish</td><td className="border-b border-neutral-200 p-2 align-top">Prefer 2 portions of oily fish a week; if supplementing, up to 1 g/day</td><td className="border-b border-neutral-200 p-2 align-top">Doses above 1 g/day raised atrial fibrillation risk by 49% across 7 trials of 81,210 people (<a href="https://doi.org/10.1161/CIRCULATIONAHA.121.055654" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gencer 2021</a>). Talk to a doctor if on blood thinners.</td><td className="border-b border-neutral-200 p-2 align-top">Moderate</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Magnesium</td><td className="border-b border-neutral-200 p-2 align-top">People with low intake (few whole grains, nuts, greens) or on some diuretics</td><td className="border-b border-neutral-200 p-2 align-top">Food first; supplements at most 250 mg/day†</td><td className="border-b border-neutral-200 p-2 align-top">Higher supplemental doses cause diarrhoea. Evidence for better sleep is weak.</td><td className="border-b border-neutral-200 p-2 align-top">Weak to moderate</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Zinc</td><td className="border-b border-neutral-200 p-2 align-top">Only with a confirmed deficiency</td><td className="border-b border-neutral-200 p-2 align-top">Short courses, as advised</td><td className="border-b border-neutral-200 p-2 align-top">Adults need 8–11 mg/day from all sources†; long-term high doses can cause copper deficiency.</td><td className="border-b border-neutral-200 p-2 align-top">Weak for routine use</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Vitamin K2</td><td className="border-b border-neutral-200 p-2 align-top">Not recommended for routine use</td><td className="border-b border-neutral-200 p-2 align-top">—</td><td className="border-b border-neutral-200 p-2 align-top">A 2-year trial (180 heart patients, 360 µg/day) found a possible effect on some plaque calcification; clinical value unknown (<a href="https://doi.org/10.1001/jamacardio.2026.1279" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VitaK-CAC 2026</a>). Interacts with warfarin.</td><td className="border-b border-neutral-200 p-2 align-top">Weak</td></tr>
          </tbody>
        </table>
        </div>

        <p><strong>Test when there is a reason.</strong> Blood tests make sense with symptoms, a restrictive diet, pregnancy, certain medications or a doctor&apos;s indication, not as an annual routine for everyone.</p>

        <h2 id="sleep" className="text-xl font-semibold">7. Sleep and light</h2>

        <p>Adults need at least 7 hours of sleep a night on a regular basis, according to the American Academy of Sleep Medicine and Sleep Research Society (<a href="https://doi.org/10.5664/jcsm.4758" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Watson 2015</a>). Short sleep makes hunger, mood and blood-sugar control harder to manage the next day. <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: strong</span></p>

        <p>The body clock is set mainly by light. An international expert consensus gives concrete targets (<a href="https://doi.org/10.1371/journal.pbio.3001571" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Brown 2022</a>):</p>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li><strong>Daytime:</strong> bright light, ideally outdoors. Even a cloudy day outside is far brighter than an office.</li>
          <li><strong>Last 3 hours before bed:</strong> dim, warm lighting.</li>
          <li><strong>During sleep:</strong> as dark as possible.</li>
        </ul>

        <figure className="flex flex-col gap-2">
          <Image src="/img/eatwell/daily-rhythm.png" alt="Timeline of a day from 07:00 to 23:00: bright light during the day, caffeine stopped at 17:00, dim light from 20:00, and a dark room for sleep." width={1344} height={502} className="w-full h-auto mx-auto" />
          <figcaption className="text-sm text-neutral-700 text-center">Illustrative day. Light targets from Brown 2022, caffeine timing from Drake 2013.</figcaption>
        </figure>

        <p>Other habits with reasonable support: a consistent wake-up time (weekends included), a cool and quiet bedroom, caffeine stopped at least 6 hours before bed, and no alcohol as a sleep aid.</p>

        <h2 id="movement" className="text-xl font-semibold">8. Movement</h2>

        <p>The WHO target for adults is 150–300 minutes a week of moderate activity (or 75–150 minutes of vigorous activity), plus muscle-strengthening on at least 2 days (<a href="https://doi.org/10.1136/bjsports-2020-102955" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bull 2020</a>). Any amount above zero helps; more helps more. <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: strong</span></p>

        <figure className="flex flex-col gap-2">
          <Image src="/img/eatwell/steps-and-mortality.png" alt="Chart showing risk of death falling by 40%, 45% and 53% as median daily steps rise from about 3,500 to 5,800, 7,800 and 10,900." width={1344} height={720} className="w-full h-auto mx-auto" />
          <figcaption className="text-sm text-neutral-700 text-center">Source: Paluch et al., Lancet Public Health 2022. Adjusted hazard ratios by quartile of daily steps.</figcaption>
        </figure>

        <p>Most of the gain comes from the first few thousand extra steps; the benefit keeps growing, but more slowly, after that.</p>

        <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead><tr><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Goal</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">What the evidence says</th></tr></thead>
          <tbody>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Daily steps</td><td className="border-b border-neutral-200 p-2 align-top">Mortality risk fell steadily up to about 6,000–8,000 steps/day in adults 60+ and 8,000–10,000 in younger adults (15 cohorts, 47,471 people; <a href="https://doi.org/10.1016/S2468-2667(21)00302-9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Paluch 2022</a>).</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Offsetting desk work</td><td className="border-b border-neutral-200 p-2 align-top">60–75 minutes a day of moderate activity removed the extra mortality risk linked to long sitting, in over 1 million people (<a href="https://doi.org/10.1016/S0140-6736(16)30370-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ekelund 2016</a>).</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Fitness</td><td className="border-b border-neutral-200 p-2 align-top">In 122,007 adults given a treadmill test, the fittest had an 80% lower risk of death than the least fit, with no upper limit of benefit (<a href="https://doi.org/10.1001/jamanetworkopen.2018.3605" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mandsager 2018</a>). It is one of the strongest predictors of longevity, alongside not smoking and blood pressure.</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Strength</td><td className="border-b border-neutral-200 p-2 align-top">Twice a week, using bodyweight, bands or weights, all major muscle groups. Muscle protects mobility and independence with age.</td></tr>
          </tbody>
        </table>
        </div>

        <p>Start with walking, add a couple of short strength sessions, then include some activity that makes you breathe hard (brisk uphill walks, cycling, swimming, running).</p>

        <h2 id="gut-health" className="text-xl font-semibold">9. Gut health</h2>

        <p>The gut microbiome responds quickly to what you eat, and the two levers with the best evidence are fibre and fermented foods. Capsule probiotics matter much less than marketing suggests.</p>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li><strong>Fibre feeds gut bacteria.</strong> Aim for 25–30 g a day from a wide variety of plants: vegetables, fruit, whole grains, legumes, nuts and seeds. Variety matters as much as quantity.</li>
          <li><strong>Fermented foods add diversity.</strong> In a 17-week randomised study, healthy adults who ate several servings a day of yogurt, kefir, kimchi, sauerkraut and similar foods increased microbiome diversity and lowered several inflammatory markers (<a href="https://doi.org/10.1016/j.cell.2021.06.019" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wastyk 2021</a>). The study was small (18 people per group), so treat it as promising. <span className="text-sm text-neutral-700 bg-neutral-100 rounded px-1.5 py-0.5 whitespace-nowrap">Evidence: moderate</span></li>
          <li><strong>Probiotic capsules are rarely needed.</strong> The American Gastroenterological Association recommends them only for specific situations, such as preventing certain infections in preterm babies or during some antibiotic treatments, and not for most digestive complaints (<a href="https://doi.org/10.1053/j.gastro.2020.05.059" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AGA, Su 2020</a>).</li>
          <li><strong>Go easy on NSAIDs.</strong> Frequent ibuprofen or similar painkillers can irritate and damage the stomach and gut lining; use the lowest effective dose.</li>
        </ul>

        <p><strong>See a doctor</strong> if you have lasting changes in bowel habits, blood in stools, unexplained weight loss, persistent abdominal pain or bloating, or difficulty swallowing. These need proper investigation rather than diet experiments.</p>

        <h2 id="shopping" className="text-xl font-semibold">10. Shopping and labels</h2>

        <p>The nutrition table on the back of a pack tells you more than any claim on the front. Words like “natural”, “fit” or “protein” say nothing about overall quality.</p>

        <p>UK front-of-pack labelling gives handy reference points per 100 g of food† (<a href="https://www.gov.uk/government/publications/front-of-pack-nutrition-labelling-guidance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UK guidance</a>):</p>

        <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead><tr><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Per 100 g</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">Low</th><th className="text-left font-semibold border-b border-neutral-300 p-2 align-top">High</th></tr></thead>
          <tbody>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Sugars</td><td className="border-b border-neutral-200 p-2 align-top">5 g or less</td><td className="border-b border-neutral-200 p-2 align-top">more than 22.5 g</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Saturated fat</td><td className="border-b border-neutral-200 p-2 align-top">1.5 g or less</td><td className="border-b border-neutral-200 p-2 align-top">more than 5 g</td></tr>
            <tr><td className="border-b border-neutral-200 p-2 align-top">Salt</td><td className="border-b border-neutral-200 p-2 align-top">0.3 g or less</td><td className="border-b border-neutral-200 p-2 align-top">more than 1.5 g</td></tr>
          </tbody>
        </table>
        </div>

        <p><strong>Quick checks in the shop</strong></p>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li>Ingredients are listed by weight, so the first two or three tell you what you are mostly buying.</li>
          <li>For bread and cereals, look for “wholemeal” or “wholegrain” as the first ingredient and at least 6 g of fibre per 100 g†.</li>
          <li>For yogurt, plain is the default; add your own fruit.</li>
          <li>Compare similar products per 100 g, not per serving, since serving sizes vary.</li>
        </ul>

        <p><strong>A basic weekly basket:</strong> seasonal and frozen vegetables, fruit, oats, wholemeal bread, brown rice or other whole grains, dried or canned legumes, eggs, plain yogurt, oily fish (fresh, frozen or canned), olive and rapeseed oil, unsalted nuts and seeds, herbs and spices to replace some of the salt.</p>

        <h2 id="plan" className="text-xl font-semibold">11. A 12-month plan</h2>

        <p>Change sticks better when it is added gradually. Take one habit a month, keep it, then add the next; reorder freely to suit your life.</p>
        <ol className="list-decimal ml-4 flex flex-col gap-2">
          <li>Walk every day, building towards 7,000–10,000 steps.</li>
          <li>Fill half of lunch and dinner plates with vegetables.</li>
          <li>Switch your main grains to wholegrain versions.</li>
          <li>Cook with olive or rapeseed oil instead of butter or coconut oil.</li>
          <li>Eat legumes at least three times a week.</li>
          <li>Have oily fish twice a week, or plan an alternative if you don&apos;t eat fish.</li>
          <li>Add two short strength sessions a week.</li>
          <li>Set a fixed wake-up time and stop caffeine 6 hours before bed.</li>
          <li>Spend time outdoors in daylight every morning.</li>
          <li>Cut alcohol to fewer days and smaller amounts, or stop.</li>
          <li>Replace processed meat and salty snacks with nuts, yogurt or fruit.</li>
          <li>Review supplements with your doctor based on your diet, age and life stage.</li>
        </ol>

        <section className="flex flex-col gap-4">
        <h2 id="sources" className="text-xl font-semibold">Sources</h2>
        <p>All links checked on 3 October 2026.</p>

        <h3 className="text-lg font-semibold">Guidelines and position statements</h3>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li>Harvard T.H. Chan School of Public Health. <a href="https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Healthy Eating Plate</a>.</li>
          <li>World Health Organization. <a href="https://www.who.int/news-room/fact-sheets/detail/sodium-reduction" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sodium reduction fact sheet</a>.</li>
          <li>Bull FC et al. <a href="https://doi.org/10.1136/bjsports-2020-102955" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WHO 2020 guidelines on physical activity and sedentary behaviour</a>. Br J Sports Med 2020.</li>
          <li>Sacks FM et al. <a href="https://doi.org/10.1161/CIR.0000000000000510" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dietary Fats and Cardiovascular Disease: AHA Presidential Advisory</a>. Circulation 2017.</li>
          <li>Demay MB et al. <a href="https://academic.oup.com/jcem/article/109/8/1907/7685305" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vitamin D for the Prevention of Disease: Endocrine Society Clinical Practice Guideline</a>. J Clin Endocrinol Metab 2024.</li>
          <li>Watson NF et al. <a href="https://doi.org/10.5664/jcsm.4758" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Recommended Amount of Sleep for a Healthy Adult (AASM/SRS)</a>. J Clin Sleep Med 2015.</li>
          <li>Brown TM et al. <a href="https://doi.org/10.1371/journal.pbio.3001571" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Recommendations for daytime, evening, and nighttime indoor light exposure</a>. PLoS Biol 2022.</li>
          <li>Bauer J et al. <a href="https://doi.org/10.1016/j.jamda.2013.05.021" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Optimal dietary protein intake in older people (PROT-AGE)</a>. J Am Med Dir Assoc 2013.</li>
          <li>Kreider RB et al. <a href="https://doi.org/10.1186/s12970-017-0173-z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ISSN position stand: creatine supplementation</a>. J Int Soc Sports Nutr 2017.</li>
          <li>Su GL et al. <a href="https://doi.org/10.1053/j.gastro.2020.05.059" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AGA Clinical Practice Guidelines on Probiotics</a>. Gastroenterology 2020.</li>
          <li>Bouvard V et al. <a href="https://doi.org/10.1016/S1470-2045(15)00444-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Carcinogenicity of consumption of red and processed meat (IARC)</a>. Lancet Oncol 2015.</li>
          <li>UK Department of Health. <a href="https://www.gov.uk/government/publications/front-of-pack-nutrition-labelling-guidance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Front of pack nutrition labelling guidance</a>.</li>
        </ul>

        <h3 className="text-lg font-semibold">Meta-analyses and reviews</h3>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li>Reynolds A et al. <a href="https://doi.org/10.1016/S0140-6736(18)31809-9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Carbohydrate quality and human health</a>. Lancet 2019.</li>
          <li>Lane MM et al. <a href="https://doi.org/10.1136/bmj-2023-077310" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ultra-processed food exposure and adverse health outcomes</a>. BMJ 2024.</li>
          <li>Neelakantan N et al. <a href="https://doi.org/10.1161/CIRCULATIONAHA.119.043052" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Coconut oil consumption and cardiovascular risk factors</a>. Circulation 2020.</li>
          <li>Marklund M et al. <a href="https://doi.org/10.1161/CIRCULATIONAHA.118.038908" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biomarkers of dietary omega-6 fatty acids and incident CVD</a>. Circulation 2019.</li>
          <li>Zhao J et al. <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2802963" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Daily alcohol intake and risk of all-cause mortality</a>. JAMA Netw Open 2023.</li>
          <li>Poole R et al. <a href="https://doi.org/10.1136/bmj.j5024" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Coffee consumption and health: umbrella review</a>. BMJ 2017.</li>
          <li>Ebrahim IO et al. <a href="https://doi.org/10.1111/acer.12006" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Alcohol and sleep I: effects on normal sleep</a>. Alcohol Clin Exp Res 2013.</li>
          <li>Gencer B et al. <a href="https://doi.org/10.1161/CIRCULATIONAHA.121.055654" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Marine omega-3 supplementation and atrial fibrillation</a>. Circulation 2021.</li>
          <li>Ekelund U et al. <a href="https://doi.org/10.1016/S0140-6736(16)30370-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Physical activity, sitting time and mortality</a>. Lancet 2016.</li>
          <li>Paluch AE et al. <a href="https://doi.org/10.1016/S2468-2667(21)00302-9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Daily steps and all-cause mortality</a>. Lancet Public Health 2022.</li>
        </ul>

        <h3 className="text-lg font-semibold">Trials and cohort studies</h3>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          <li>Manson JE et al. <a href="https://doi.org/10.1056/NEJMoa1809944" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vitamin D supplements and prevention of cancer and CVD (VITAL)</a>. NEJM 2019.</li>
          <li><a href="https://doi.org/10.1001/jamacardio.2026.1279" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Menaquinone-7 supplementation and coronary artery calcification (VitaK-CAC)</a>. JAMA Cardiol 2026.</li>
          <li>Liu D et al. <a href="https://doi.org/10.1056/NEJMoa2114833" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Calorie restriction with or without time-restricted eating</a>. NEJM 2022.</li>
          <li>Shukla AP et al. <a href="https://doi.org/10.2337/dc15-0429" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Food order and postprandial glucose</a>. Diabetes Care 2015.</li>
          <li>Shukla AP et al. <a href="https://doi.org/10.1136/bmjdrc-2017-000440" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Carbohydrate-last meal pattern in type 2 diabetes</a>. BMJ Open Diabetes Res Care 2017.</li>
          <li>Sonia S et al. <a href="https://doi.org/10.6133/apjcn.2015.24.4.13" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cooling cooked white rice: resistant starch and glycemic response</a>. Asia Pac J Clin Nutr 2015.</li>
          <li>Wastyk HC et al. <a href="https://doi.org/10.1016/j.cell.2021.06.019" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gut-microbiota-targeted diets modulate human immune status</a>. Cell 2021.</li>
          <li>Drake C et al. <a href="https://doi.org/10.5664/jcsm.3170" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Caffeine taken 0, 3 or 6 hours before bed</a>. J Clin Sleep Med 2013.</li>
          <li>Morck TA et al. <a href="https://doi.org/10.1093/ajcn/37.3.416" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Inhibition of food iron absorption by coffee</a>. Am J Clin Nutr 1983.</li>
          <li>Mandsager K et al. <a href="https://doi.org/10.1001/jamanetworkopen.2018.3605" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cardiorespiratory fitness and long-term mortality</a>. JAMA Netw Open 2018.</li>
        </ul>

        <p className="text-sm text-neutral-700"><strong>† Reference values awaiting a final check against the original documents:</strong> EFSA 2010 reference values for water; EFSA upper limits for vitamin D, magnesium and zinc; EU Regulation 2019/649 on trans fats; WHO 2023 guideline on non-sugar sweeteners; the UK “high” thresholds in the label table; the EU “high fibre” claim threshold of 6 g/100 g.</p>
        </section>
      </main>

      <footer className="flex items-center gap-4 lg:gap-8 flex-wrap text-neutral-700">
        <a className="text-neutral-700 hover:underline" href="https://github.com/malikbarbier7">Github</a>
        <a className="text-neutral-700 hover:underline" href="https://x.com/Malikbuilds">X</a>
        <a className="text-neutral-700 hover:underline" href="https://www.linkedin.com/in/malikbarbier/">LinkedIn</a>
      </footer>
    </div>
  );
};

export default TestArticle;
