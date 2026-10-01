"use client";

import Image from "next/image";
import Link from "next/link";

const latestBlogs = [
  {
    title:
      "Invisalign vs Traditional Braces for Working Professionals in Bengaluru",
    date: "28 Sept 2026",
    image: "/assets/blogs/b3.jpg",
    link: "/blogs/invisalign-vs-traditional-braces-working-professionals-bengaluru",
  },
  {
    title: "How Long Does Invisalign Really Take? A Realistic Timeline",
    date: "29 Sept 2026",
    image: "/assets/blogs/b3.jpg",
    link: "/blogs/how-long-does-invisalign-really-take-realistic-timeline",
  },
  {
    title: "Dental Clinic for Tooth Pain in Marathahalli",
    date: "11 Sept 2026",
    image:
      "/assets/blogs/dos-and-donts-after-teeth-whitening-bangalore-dentist-tips.webp",
    link: "/blogs/tooth-pain-treatment-marathahalli",
  },
  {
    title: "Dental Implants vs Bridges: Which is the Best Option in Bangalore",
    date: "",
    image:
      "/assets/blogs/dental-implants-vs-bridges-best-option-bangalore-maxalign.webp",
    link: "/blogs/dental-implants-vs-bridges-best-option-bangalore-maxalign",
  },
];

const comparison = [
  ["Visibility", "Virtually invisible clear plastic", "Visible metal brackets or ceramic blocks"],
  ["Dietary Limits", "No restrictions (remove while eating)", "Avoid sticky, hard, and chewy items"],
  ["Oral Hygiene", "Normal brushing and flossing", "Requires threaders and interdental brushes"],
  ["Appointment Frequency", "Every 6 to 8 weeks", "Every 3 to 4 weeks"],
  ["Discomfort Level", "Mild pressure for 1–2 days per tray", "Soreness and soft tissue irritation from wires"],
  ["Discipline Required", "High (must wear 20–22 hours daily)", "None (fixed permanently to teeth)"],
];

const faqs = [
  {
    question:
      "Can I have wine, coffee, or tea while wearing clear aligners?",
    answer:
      "To prevent stains and heat-induced plastic warping, you must take off your aligners before consuming hot or colorful liquids. The only beverage you are allowed to have while wearing your trays is pure, chilled water.",
  },
  {
    question:
      "Will I have an obvious lisp in client meetings if I use Invisalign?",
    answer:
      "For the first two to three days, when your tongue becomes used to the plastic trays, you can have a very slight lisp. Your regular speech and articulation fully return after this brief period of adaptation.",
  },
  {
    question:
      "What would happen if I broke or misplaced one of my aligner trays?",
    answer:
      "Make an immediate appointment with your orthodontist, wear your old tray, or proceed to the next one as instructed. Your alignment might regress in a matter of days, so you should never leave your teeth unsupported.",
  },
  {
    question:
      "What are 'attachments,' and will they let me see my Invisalign up close?",
    answer:
      "To help with complicated rotations, attachments—tiny, tooth-colored composite dots—are temporarily glued to specific teeth. They are undetectable at typical conversational distances and blend in perfectly with your natural enamel hue.",
  },
  {
    question:
      "After receiving orthodontic treatment, may adult teeth move back?",
    answer:
      "Yes, whether you wear braces or Invisalign, adult teeth naturally tend to wander over time. If you want to permanently fix your last grin, you must wear a retainer at night.",
  },
  {
    question:
      "When traveling domestically or abroad, do metal braces activate airport security metal detectors?",
    answer:
      "No, airport scanners are not triggered by the lightweight, non-ferromagnetic medical metals used in contemporary orthodontic wires and brackets. Without any paperwork, you may easily get through security checks.",
  },
];

export default function InvisalignVsBracesBlog() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative flex min-h-[420px] h-[55vh] md:h-[65vh] items-center justify-center overflow-hidden bg-gradient-to-r from-[#0A1F26] via-[#0B7A75] to-[#0A1F26] px-6">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-white">
            MAXALIGN DENTAL · DENTAL HEALTH
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Invisalign vs Traditional Braces for Working Professionals in
            Bengaluru
          </h1>

          <p className="mt-6 text-sm font-medium text-white/80 md:text-base">
            MaxAlign Dental · 28 Sept 2026
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-3 md:px-6">
          {/* MAIN ARTICLE */}
          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg md:col-span-2">
            <div className="relative h-[260px] w-full sm:h-[400px]">
              <Image
                src="/assets/blogs/b3.jpg"
                alt="Invisalign clear aligners compared with traditional braces"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-10">
              <div className="mb-8 border-b border-gray-200 pb-5">
                <p className="text-sm font-medium text-[#0B7A75]">
                  MaxAlign Dental · 28 Sept 2026
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
                  Invisalign vs Traditional Braces for Working Professionals
                  in Bengaluru
                </h2>
              </div>

              <div className="space-y-8 text-[16px] leading-8 text-gray-700">
                <section>
                  <h2 className="mb-4 text-2xl font-bold leading-tight text-[#0B7A75]">
                    The Braces Selection Challenge: The Perfect Option for
                    Working Professionals in Bengaluru
                  </h2>

                  <p>
                    In the boardroom, a self-assured smile creates a strong
                    first impression. Professionals in Bengaluru have always
                    hectic lifestyles.
                  </p>

                  <p className="mt-4">
                    You could work from lively coworking spaces in Koramangala
                    and Indiranagar, or you could put in long hours at
                    Whitefield tech parks. Hybrid sprints, presentations, and
                    post-work networking meals are all part of the daily
                    calendar.
                  </p>

                  <p className="mt-4">
                    Crooked teeth or bite problems may cause issues. Yet
                    standard orthodontic treatment often feels like a burden.
                    Orthodontic technology now offers covert solutions. For
                    working professionals in Bengaluru, the main argument
                    between Invisalign and conventional braces is
                    straightforward.
                  </p>

                  <p className="mt-4">
                    At{" "}
                    <Link
                      href="https://www.maxaligndental.com/"
                      className="font-semibold text-[#0B7A75] underline"
                    >
                      MaxAlign Dental
                    </Link>
                    , we help you choose a procedure that complements your
                    everyday routine and esthetic preferences.
                  </p>

                  <p className="mt-4">
                    <Link
                      href="https://www.maxaligndental.com/appointment"
                      className="font-semibold text-[#0B7A75] underline"
                    >
                      Want a seamless appointment? Click Here!
                    </Link>
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold text-[#0B7A75]">
                    The Core Difference: How Each System Works
                  </h2>

                  <p>
                    Although the mechanics of these procedures are very
                    different, they both correct mismatched teeth.
                  </p>

                  <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">
                    Traditional Braces
                  </h3>

                  <p>
                    Brackets made of metal or ceramic are immediately attached
                    to your enamel. They are joined by an orthodontic archwire,
                    and everything is secured in position by tiny elastic
                    bands. Your teeth are guided into alignment by the
                    mechanical force created by your orthodontist's periodic
                    tightening of this wire.
                  </p>

                  <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">
                    Invisalign Clear Aligners
                  </h3>

                  <p>
                    Custom-molded trays consisting of patented, medical-grade
                    SmartTrack material are used with Invisalign. These trays
                    provide mild, constant micro-forces while fitting tightly
                    over your teeth. After wearing each set for a week or two,
                    you move on to the next set in your series.
                  </p>

                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      href="https://www.maxaligndental.com/services/invisible-aligners"
                      className="font-semibold text-[#0B7A75] underline"
                    >
                      Invisalign Clear Aligners
                    </Link>
                    .
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold text-[#0B7A75]">
                    Aesthetics and Professional Confidence
                  </h2>

                  <p>
                    During panel discussions, Zoom conversations, and in-person
                    pitches, how you look is important.
                  </p>

                  <p className="mt-4">
                    Across a conference table, metal brackets are instantly
                    apparent. Although the brackets still add obvious weight,
                    ceramic braces blend in better with tooth enamel.
                  </p>

                  <p className="mt-4">
                    On the other hand, Invisalign transparent aligners are
                    almost undetectable. Seldom will clients or coworkers
                    notice that you are wearing them. You can network without
                    being self-conscious about flashy electronics and give
                    presentations with complete elegance.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold text-[#0B7A75]">
                    Convenience and the Bengaluru Lifestyle
                  </h2>

                  <p>
                    There isn't much time for regular medical visits due to
                    business schedules and traffic on the Outer Ring Road. When
                    selecting an orthodontic appliance, your lifestyle is a
                    major factor.
                  </p>

                  <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">
                    Clinic Visits and Chair Time
                  </h3>

                  <p>
                    Every three to four weeks, traditional metal braces must be
                    adjusted in person. It can take 30 to 45 minutes to get to
                    an appointment, and it might be stressful to travel across
                    town during rush hour.
                  </p>

                  <p className="mt-4">
                    Invisalign easily integrates into rigorous regimens. Your
                    checkups only take place once every six to eight weeks
                    since you receive many sets of aligners beforehand. The
                    majority of follow-up reviews are completed in under
                    fifteen minutes.
                  </p>

                  <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">
                    Dietary Freedom and Bangalore Food Culture
                  </h3>

                  <p>
                    Bengaluru is a cuisine lover's dream come true. You could
                    like Indiranagar cafés' handmade munchies or VV Puram's
                    crunchy dosas.
                  </p>

                  <p className="mt-4">
                    There are stringent dietary requirements for braces:
                  </p>

                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Foods that are crunchy, sticky, or hard must be avoided.
                    </li>
                    <li>
                      Chewy flatbreads, popcorn, and nuts can cause brackets to
                      come loose or bend wires.
                    </li>
                    <li>
                      Bracket breaks frequently cause trips to emergency
                      clinics.
                    </li>
                  </ul>

                  <p className="mt-4">
                    There are no dietary limitations with Invisalign. Before
                    eating, just take out the aligners, savor your favorite
                    foods, clean your mouth, and replace them.
                  </p>

                  <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">
                    Oral Hygiene and Daily Maintenance
                  </h3>

                  <p>
                    Plaque and food particles won’t come off easily when they
                    get attached to brackets and wires. This leads to gum
                    disease and enamel stains. That’s why you should use
                    specialist interdental brushes and floss threaders every
                    night.
                  </p>

                  <p className="mt-4">
                    You may brush and floss normally with Invisalign. You may
                    easily keep fresh breath during office hours by using a
                    soft toothbrush and lukewarm water to clean your aligners.
                  </p>
                </section>

                {/* COMPARISON TABLE */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-[#0B7A75]">
                    A Simple Comparison: Table Format
                  </h2>

                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                      <thead className="bg-[#0B7A75] text-white">
                        <tr>
                          <th className="p-4 font-semibold">Feature</th>
                          <th className="p-4 font-semibold">
                            Invisalign Clear Aligners
                          </th>
                          <th className="p-4 font-semibold">
                            Traditional Braces
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.map((row, index) => (
                          <tr
                            key={row[0]}
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="border-b border-gray-200 p-4 align-top"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold text-[#0B7A75]">
                    Treatment Duration and Complexity
                  </h2>

                  <p>
                    At MaxAlign, we decide the treatment timelines that depend
                    on your specific dental structure, such as:
                  </p>

                  <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">
                    Mild to Moderate Alignment Problems
                  </h3>

                  <p>
                    Invisalign usually completes treatment between six and
                    eighteen months. Every tooth movement is mapped out in
                    advance using digital 3D planning, making the procedure
                    predictable and effective.
                  </p>

                  <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">
                    Complex Skeletal Corrections
                  </h3>

                  <p>
                    Traditional braces may be necessary for extreme rotations,
                    big gaps, or severe malocclusions. Fixed brackets provide
                    your doctor with great control over intricate dental roots
                    and offer sturdy anchor points.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold text-[#0B7A75]">
                    Cost Considerations in Bengaluru
                  </h2>

                  <p>
                    Orthodontic treatment is an investment in one's personal
                    presence and long-term dental health.
                  </p>

                  <p className="mt-4">
                    The most affordable option is often found with traditional
                    metal braces. Because ceramic braces are made of
                    aesthetically pleasing materials, they are slightly more
                    expensive.
                  </p>

                  <p className="mt-4">
                    Because Invisalign employs specialist aligner polymers,
                    bespoke production, and sophisticated 3D scanning, the
                    initial cost is greater. But for many working professionals,
                    the inconspicuous appearance, time savings, and nutritional
                    flexibility easily make up for the difference.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold text-[#0B7A75]">
                    Which Choice Is Best for You?
                  </h2>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Select Invisalign if
                  </h3>

                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      You often visit client events, conduct meetings, and make
                      public speeches.
                    </li>
                    <li>
                      You desire orthodontic treatment that is absolutely
                      private.
                    </li>
                    <li>
                      You would rather have flexible scheduling and fewer
                      clinic visits.
                    </li>
                    <li>
                      You have the discipline to wear aligners for 20 to 22
                      hours each day.
                    </li>
                  </ul>

                  <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">
                    Select Conventional Braces if:
                  </h3>

                  <ul className="list-disc space-y-2 pl-6">
                    <li>Complex orthodontic disorders require repair.</li>
                    <li>
                      You don't want to monitor detachable trays and would
                      rather have a permanent solution.
                    </li>
                    <li>
                      You're looking for a therapy that works and costs less up
                      front.
                    </li>
                  </ul>
                </section>

                {/* CTA */}
                <section className="rounded-2xl bg-gradient-to-r from-[#0A1F26] via-[#0B7A75] to-[#0A1F26] p-7 text-white sm:p-9">
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                    Start Transforming Your Smile at MaxAlign Dental!
                  </h2>

                  <p className="mt-4 leading-7 text-white/90">
                    Now, upgrade your executive presence and support your
                    long-term oral health with a self-assured, healthy grin.
                    Our licensed orthodontists at MaxAlign Dental trace your
                    bite using digital intraoral scanners. We provide
                    personalized therapy programs that fit your hectic work
                    schedule.
                  </p>

                  <a
                    href="tel:9321533345"
                    className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-bold text-[#0B7A75] transition hover:bg-gray-100"
                  >
                    Call MaxAlign Dental Now
                  </a>
                </section>

                {/* FAQ */}
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-[#0B7A75]">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details
                        key={faq.question}
                        className="group rounded-xl border border-gray-200 bg-white p-5"
                        open={index === 0}
                      >
                        <summary className="cursor-pointer list-none pr-5 font-semibold text-gray-900 marker:hidden">
                          <span className="flex items-center justify-between gap-4">
                            {faq.question}
                            <span className="text-xl text-[#0B7A75] transition group-open:rotate-45">
                              +
                            </span>
                          </span>
                        </summary>

                        <p className="mt-4 leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
              <h2 className="mb-6 border-b border-gray-200 pb-4 text-xl font-bold text-gray-900">
                Latest Blogs
              </h2>

              <div className="space-y-5">
                {latestBlogs.map((blog) => (
                  <Link
                    href={blog.link}
                    key={blog.link}
                    className="group flex gap-4"
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="96px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div>
                      <h3 className="line-clamp-3 text-sm font-semibold leading-5 text-gray-800 transition group-hover:text-[#0B7A75]">
                        {blog.title}
                      </h3>
                      {blog.date && (
                        <p className="mt-2 text-xs text-gray-500">
                          {blog.date}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-[#0A1F26] via-[#0B7A75] to-[#0A1F26] p-7 text-white shadow-lg">
              <h2 className="text-2xl font-bold">
                Ready for Your New Smile?
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/90">
                Book your consultation with MaxAlign Dental and explore a
                treatment plan tailored to your smile and lifestyle.
              </p>

              <Link
                href="https://www.maxaligndental.com/appointment"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-center font-bold text-[#0B7A75] transition hover:bg-gray-100"
              >
                Book an Appointment
              </Link>

              <a
                href="tel:9321533345"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/50 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Call: 9321533345
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}