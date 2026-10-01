"use client";

import Image from "next/image";
import Link from "next/link";

export default function BestInvisalignBlog() {
  const latestBlogs = [
    {
      title: "How Long Does Invisalign Really Take? A Realistic Timeline",
      img: "/assets/blogs/b3.jpg",
      link: "/blogs/how-long-does-invisalign-really-take",
      date: "29-09-2026",
    },
    {
      title: "Top 5 Benefits of Professional Teeth Whitening",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/professional-teeth-whitening",
      date: "19-07-2025",
    },
    {
      title: "Why Max Align is one of the Best Dental Clinics in Marathahalli",
      img: "/assets/blogs/b1.jpg",
      link: "/blogs/max-align-best-dental-clinic",
      date: "13-07-2025",
    },
    {
      title: "How Invisible Aligners Work",
      img: "/assets/blogs/b3.jpg",
      link: "/blogs/importance-of-dental-checkups",
      date: "10-07-2025",
    },
    {
      title: "Why Winter is the Best Time to Have Teeth Whitening in Bangalore",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/teeth-whitening",
      date: "08-07-2025",
    },
  ];

  const treatmentTimeline = [
    {
      complexity: "Mild",
      timeline: "6 to 9 Months",
      treatment: "Minor crowding, small gaps, slight relapse",
    },
    {
      complexity: "Moderate",
      timeline: "12 to 18 Months",
      treatment: "Noticeable gaps, crooked front teeth, rotation",
    },
    {
      complexity: "Severe",
      timeline: "18 to 24+ Months",
      treatment: "Deep overbite, underbite, severe crowding",
    },
  ];

  const comparison = [
    {
      feature: "Average Time",
      aligners: "12 to 18 Months",
      braces: "18 to 24 Months",
    },
    {
      feature: "Visibility",
      aligners: "Nearly Invisible",
      braces: "Highly Visible",
    },
    {
      feature: "Diet Restrictions",
      aligners: "None (Remove to Eat)",
      braces: "No Hard or Sticky Foods",
    },
    {
      feature: "Dental Hygiene",
      aligners: "Normal Brushing & Flossing",
      braces: "Requires Special Flossers",
    },
    {
      feature: "Comfort",
      aligners: "Smooth Custom Trays",
      braces: "Wires Can Poke Cheeks",
    },
  ];

  return (
    <>
      {/* ================== DARK BLOG BANNER ================== */}

      <div className="bg-white">
        <section className="relative flex h-[55vh] w-full items-center justify-center bg-gradient-to-b from-[#0A1F26] via-[#0B7A75] to-[#0A1F26] md:h-[65vh]">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white">
              MaxAlign Dental | 29 Sept 2026
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-xl md:text-5xl">
              How Long Does Invisalign Really Take? A Realistic Timeline
            </h1>
          </div>
        </section>

        {/* ================== PAGE CONTENT ================== */}

        <section className="w-full bg-white py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">

            {/* ================== LEFT ARTICLE ================== */}

            <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg md:col-span-2">

              {/* FEATURE IMAGE */}

              <div className="overflow-hidden">
                <Image
                  src="/assets/blogs/b3.jpg"
                  alt="How Long Does Invisalign Really Take? A Realistic Timeline"
                  width={900}
                  height={450}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-10">

                {/* ARTICLE TITLE */}

                <h2 className="mb-6 text-3xl font-bold leading-snug text-[#0B7A75] md:text-4xl">
                  How Long Does Invisalign Really Take? A Realistic Timeline
                </h2>

                <div className="prose prose-lg max-w-none space-y-6 leading-relaxed text-gray-700">

                  {/* ================== INTRODUCTION ================== */}

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Introduction
                  </h3>

                  <p>
                    Do you wish your grin were straighter? You most likely
                    desire fast results with clear dental aligners. Patients
                    often ask, &quot;How long does Invisalign really take?&quot;
                  </p>

                  <p>
                    Although each smile is different, the stages of clear
                    aligner treatment are predictable. At MaxAlign Dental,{" "}
                    <Link
                      className="font-medium text-[#0B7A75] underline"
                      href="https://www.maxaligndental.com/drprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dr. Ayushi Verma, B.D.S., M.D.S.
                    </Link>
                    , values honest timelines and real results.
                  </p>

                  <p>
                    <Link
                      className="font-medium text-[#0B7A75] underline"
                      href="https://www.maxaligndental.com/appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book now to get the best dental aligner at MaxAlign!
                    </Link>
                  </p>

                  {/* ================== TREATMENT DURATION ================== */}

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    The Brief Response: Mean Length of Treatment
                  </h3>

                  <p>
                    Most people finish using aligners in 12 to 18 months.
                  </p>

                  <p>
                    Even minor alignment problems can be resolved in just six
                    months. It will take up to 24 months to make complex bite
                    adjustments. During the first few weeks, you will begin to
                    see noticeable changes.
                  </p>

                  <p>Here's a summary of what to anticipate:</p>

                  {/* TREATMENT TIMELINE TABLE */}

                  <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-[#0B7A75] text-white">
                          <th className="px-5 py-4 font-semibold">
                            Case Complexity
                          </th>

                          <th className="px-5 py-4 font-semibold">
                            Typical Timeline
                          </th>

                          <th className="px-5 py-4 font-semibold">
                            What It Treats
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {treatmentTimeline.map((item, index) => (
                          <tr
                            key={item.complexity}
                            className={
                              index % 2 === 0
                                ? "bg-white"
                                : "bg-gray-50"
                            }
                          >
                            <td className="border-b border-gray-200 px-5 py-4 font-semibold text-gray-900">
                              {item.complexity}
                            </td>

                            <td className="border-b border-gray-200 px-5 py-4 font-medium text-[#0B7A75]">
                              {item.timeline}
                            </td>

                            <td className="border-b border-gray-200 px-5 py-4 text-gray-700">
                              {item.treatment}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* ================== MONTH BY MONTH ================== */}

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Month-by-Month: What to Expect During Treatment
                  </h3>

                  <p>
                    Knowing each stage guarantees steady growth and keeps you
                    motivated.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    Month 1: Your First Trays and Digital Scans
                  </h4>

                  <p>
                    At our facility, your journey begins with a 3D digital
                    scan. Your personalized trays are sent shortly after we
                    map out your whole tooth movement plan. Light pressure is
                    applied over the first few days, but your mouth rapidly
                    adjusts. After taking your trays out to eat, you brush
                    them and click them back into position.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    Months 2–3: The Phase of Habit
                  </h4>

                  <p>
                    It becomes second nature to wear your aligners. Every one
                    to two weeks, you swap to a new set of trays. You will
                    already feel slight changes in your bite, and the plastic
                    remains transparent.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    Months 7 through 12: Deep Movement and Bite Alignment
                  </h4>

                  <p>
                    The rear molars still require care, but the front teeth
                    look fantastic. During this stage, aligners focus on your
                    bite connection. This stage is crucial because proper bite
                    alignment prevents further tooth damage.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    Months 12+: Optimization and Improvements
                  </h4>

                  <p>
                    Certain teeth will require minor changes due to their
                    stubbornness. After a brief scan, you are given refining
                    trays for accuracy. You are given personalized retainers
                    to protect your finished product after it is completed.
                  </p>

                  {/* ================== FACTORS ================== */}

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Important Elements That Affect Your Invisalign Schedule
                  </h3>

                  <p>
                    Why do some therapies take two years to complete while
                    others end in six months? Your precise timetable is shaped
                    by a number of daily circumstances.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    1. The degree of misalignment
                  </h4>

                  <p>
                    We give fewer motions for minor cosmetic adjustments.
                    Slow, delicate movements are necessary. We do it for
                    complex bite repairs to preserve your tooth roots.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    2. The 22-Hour Rule for Daily Wear Time
                  </h4>

                  <p>
                    You must wear your aligners for them to function. Every
                    day, you have to keep them for 20 to 22 hours. Leaving
                    them out can cause your teeth to slide backward and slow
                    your growth.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    3. Age and Bone Density of the Patient
                  </h4>

                  <p>
                    Teenagers&apos; teeth move a little faster as their
                    jawbones are still developing and malleable. Despite the
                    density of mature jaw tissue, adult bone consistently
                    reshapes under constant pressure.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    4. The Reaction of Biological Teeth
                  </h4>

                  <p>
                    Everyone&apos;s body reacts to pressure differently. Some
                    teeth migrate slower and others move quickly.
                  </p>

                  {/* ================== COMPARISON ================== */}

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Invisalign vs. Conventional Braces: Lifestyle and Speed
                  </h3>

                  <p>
                    Elastic bands, wires, and metal brackets are used in
                    traditional braces. Smooth, medical-grade plastic is used
                    in clear aligners.
                  </p>

                  {/* COMPARISON TABLE */}

                  <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-[#0B7A75] text-white">
                          <th className="px-5 py-4 font-semibold">
                            Feature
                          </th>

                          <th className="px-5 py-4 font-semibold">
                            Clear Aligners
                          </th>

                          <th className="px-5 py-4 font-semibold">
                            Traditional Metal Braces
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {comparison.map((item, index) => (
                          <tr
                            key={item.feature}
                            className={
                              index % 2 === 0
                                ? "bg-white"
                                : "bg-gray-50"
                            }
                          >
                            <td className="border-b border-gray-200 px-5 py-4 font-semibold text-gray-900">
                              {item.feature}
                            </td>

                            <td className="border-b border-gray-200 px-5 py-4 text-gray-700">
                              {item.aligners}
                            </td>

                            <td className="border-b border-gray-200 px-5 py-4 text-gray-700">
                              {item.braces}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    While both techniques use mild force, transparent
                    aligners simultaneously deliver focused force to every
                    surface of the teeth.
                  </p>

                  {/* ================== FOUR TIPS ================== */}

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Four Practical Ways to Complete Your Treatment More
                    Quickly
                  </h3>

                  <p>
                    Your alignment timetable is directly within your control.
                    To prevent treatment delays, adhere to these easy
                    guidelines:
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    Wear your aligners for 22 hours every day
                  </h4>

                  <p>
                    Remove them only for oral hygiene, hot beverages, and
                    meals.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    Maintaining aligners
                  </h4>

                  <p>
                    Rinse your trays with lukewarm water rather than hot
                    water to minimize warping.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    Make use of your chewies
                  </h4>

                  <p>
                    Use gentle biting activities to ensure your aligners are
                    fully in contact with your teeth.
                  </p>

                  <h4 className="text-xl font-bold text-[#0B7A75]">
                    Never skip a checkup
                  </h4>

                  <p>
                    Regular monitoring ensures your teeth follow your digital
                    strategy.
                  </p>

                  {/* ================== FINAL CTA ================== */}

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Begin Transforming Your Smile Right Now!
                  </h3>

                  <p>
                    Besides protecting your long-term dental health, a
                    straighter smile increases your self-confidence. You
                    don&apos;t have to estimate how long your therapy will
                    take.
                  </p>

                  <p>
                    To arrange your consultation, stop by MaxAlign Dental now.
                    We make a customized digital road plan for your teeth and
                    provide you with a precise timeframe right away.
                  </p>

                  <p>
                    <a
                      href="tel:9321533345"
                      className="inline-block rounded-lg bg-[#0B7A75] px-6 py-3 font-semibold text-white no-underline transition hover:bg-[#0A1F26]"
                    >
                      Call us for the appointment!
                    </a>
                  </p>

                  {/* ================== FAQS ================== */}

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Frequently Asked Questions
                  </h3>

                  <p>
                    <strong>
                      Do you have a speech lisp due to using Invisalign?
                    </strong>
                    <br />
                    For the first two or three days, there can be a minor
                    lisp. Within a week, your regular speech resumes as your
                    tongue quickly adjusts.
                  </p>

                  <p>
                    <strong>
                      Can I have hot tea or coffee in the morning while
                      wearing my aligners?
                    </strong>
                    <br />
                    The transparent material is stained, and the medical
                    plastic is warped by hot liquids. You can use cold, simple
                    water, or you could take out your trays first.
                  </p>

                  <p>
                    <strong>
                      If the trays are already loose in my mouth, will I
                      change them early?
                    </strong>
                    <br />
                    The underlying bone takes time to solidify, but trays come
                    loose rapidly. Maintain a rigid routine and take
                    precautions to prevent long-term damage to your tooth
                    roots.
                  </p>

                  <p>
                    <strong>
                      During treatment, why do some of my teeth feel a little
                      loose?
                    </strong>
                    <br />
                    To enable safe tooth movement, your jawbone somewhat
                    softens. Your teeth will eventually harden up again, so
                    this feeling is very natural.
                  </p>

                  <p>
                    <strong>
                      What should I do if an active aligner tray breaks or
                      disappears?
                    </strong>
                    <br />
                    Make a quick call to your dentist&apos;s office and bring
                    your old backup tray. Don&apos;t start a new set without
                    first consulting a specialist.
                  </p>
                </div>
              </div>
            </article>

            {/* ================== RIGHT SIDEBAR ================== */}

            <aside className="space-y-8">

              {/* LATEST BLOGS */}

              <div className="rounded-xl border bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-[#0B7A75]">
                  Latest Blogs
                </h3>

                <div className="space-y-4">
                  {latestBlogs.map((blog, i) => (
                    <Link
                      key={i}
                      href={blog.link}
                      className="group flex items-start gap-4 transition hover:opacity-90"
                    >
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        width={80}
                        height={80}
                        className="h-20 w-20 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-sm font-semibold leading-tight text-gray-900 transition group-hover:text-[#0B7A75]">
                          {blog.title}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {blog.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* BOOK APPOINTMENT CTA */}

                <Link
                  href="https://www.maxaligndental.com/appointment"
                  className="mt-6 block rounded-xl bg-gradient-to-r from-[#0A1F26] to-[#0B7A75] p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <p className="text-lg font-bold text-white">
                    Ready for your best smile?
                  </p>

                  <p className="mb-4 mt-1 text-sm text-white/90">
                    Expert care at Maxalign Dental
                  </p>

                  <span className="inline-block w-full rounded-lg bg-white px-6 py-3 font-semibold text-[#0B7A75] transition hover:bg-[#4EE0D4] hover:text-[#0A1F26]">
                    BOOK APPOINTMENT
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}