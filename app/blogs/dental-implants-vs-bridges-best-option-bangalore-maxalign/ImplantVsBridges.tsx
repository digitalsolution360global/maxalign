"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImplantVsBridges() {
   const latestBlogs = [
    {
      title: "Top 5 Benefits of Professional Teeth Whitening",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/professional-teeth-whitening",
      date: "19-07-2025"
    },
    {
      title: "Why Max Align is one of the Best Dental Clinics in Marathahalli",
      img: "/assets/blogs/b1.jpg",
      link: "/blogs/max-align-best-dental-clinic",
      date: "13-07-2025"
    },
    {
      title: "How Invisible Aligners Work",
      img: "/assets/blogs/b3.jpg",
      link: "/blogs/importance-of-dental-checkups",
      date: "10-07-2025"
    },
    {
      title: "Why Winter is the Best Time to Have Teeth Whitening in Bangalore",
      img: "/assets/blogs/b2.jpg",
      link: "/blogs/teeth-whitening",
      date: "08-07-2025"
    },
     {
      title: " The 7 Best Dental Care Hacks To Maintain a Healthy Smile This Winter.",
      img: "/assets/blogs/b1.jpg",
      link: "/blogs/WinterDentalCareBlog",
      date: "05-07-2025"
    },
  ];
  const faqs = [
  {
    question: "Why should I choose dental implants Bangalore at MaxAlign over dental bridges?",
    answer: "We ensure a permanent, standalone restoration. There is no delay in our treatment. Dentists use advanced 3D imaging to deliver precise implant placements."
  },
  {
    question: "What is the dental implants vs bridges cost in Bangalore at our clinic?",
    answer: "The cost varies based on materials and your specific jaw health. The cost is perfect at MaxAlign, as you get a lifelong, cost-effective solution with available flexible payment plans."
  },
  {
    question: "How long does it take to get dental bridges Bangalore at MaxAlign?",
    answer: "Dentists at MaxAlign can complete the dental bridges Bangalore procedure in just two to three visits over two weeks"
  },
  {
    question: "Which is better: implants or bridges for missing teeth solutions?",
    answer: "We always provide modern dental bridges as they provide an elite, beautiful, and non-invasive alternative to close the gap. That’s why modern implants or bridges are great choices."
  },
  {
    question: "Does MaxAlign offer cosmetic dentistry Bangalore options for multiple missing teeth?",
    answer: "Yes, our dentists are all good at offering comprehensive cosmetic dentistry Bangalore solutions tailored to your unique smile"
  }
];
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ================== DARK BLOG BANNER ================== */}
      <div className="bg-white">
<section
  className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center
    bg-gradient-to-b from-[#0A1F26] via-[#0B7A75] to-[#0A1F26]"
>
  <div className="text-center px-6 max-w-7xl mx-auto">
    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight">
           Dental Implants vs Bridges: Which is the Best Option in Bangalore
          </h1>
        </div>
      </section>

      {/* ================== PAGE CONTENT ================== */}
<section className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* ============== LEFT ARTICLE - Image inside content box ============== */}
    <article className="md:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="overflow-hidden">
        <Image
          src="/assets/blogs/b1.jpg"
          alt="Featured Blog"
          width={900}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="p-10">
        <div className="flex items-center text-gray-500 gap-6 text-sm mb-6">
          <span>👤 Admin</span>
          <span>📅 9 Jun 2026</span>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-[#0B7A75]">
            Dental Implants Bangalore: Choosing Your Best Smile Makeover at MaxAlign
          </h2>
          <p>
            Losing a permanent tooth is not a comfortable decision. This won’t let you laugh freely or enjoy your favorite local foods. If you are currently exploring missing teeth solutions, you can choose from two major choices: modern dental implants or traditional dental bridges.
          </p>

          <p>
            At <Link className="underline" href="/">MaxAlign</Link>, we can determine which is better implants or bridges for your long-term health. We give our patients the care they need.
          </p>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Dental Implants Bangalore: The Permanent Way to Restore Your Smile
          </h3>

          <p>Max Align’s Dental implants Bangalore are the perfect solution. The dentistry you get here sets the gold standard for modern tooth replacement. Dentists and their elegance can mimic the natural anatomy of a real tooth. </p>
<p>In this process, they do place a small titanium post. It is posted directly into your jawbone. That’s how the dentists provide support and secure a sturdy artificial root.</p>
<p>Over a few months, this post permanently fuses with your bone before a custom ceramic crown is fixed on top.</p>

<p>With the right dental implants, patients can experience the following oral benefits:</p>
          <ul className="list-disc pl-6">
            <li>Protect your remaining natural enamel</li>
            <li>Prevent natural facial sagging over time</li>
            <li>Easily last a lifetime without needing replacements</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Dental Bridges Bangalore: A Quick and Reliable Restoration
          </h3>

          <p>
            For patients looking for swift, non-surgical results, Max Align is the right solution. Here, we provide advanced tooth replacement options along with cosmetic dentistry Bangalore. This bridges the physical space seamlessly without the need for bone surgery. 
          </p>

          <p>
            A dental bridge consists of a realistic artificial tooth. We keep them in the right place on the crowns. It can be cemented onto the healthy teeth on either side of the gap. 
          </p>

          <p>
            With the advanced cosmetic dentistry Bangalore, our goal is to deliver the following benefits: 
          </p>

          <ul className="list-disc pl-6">
            <li>Proper and customized healing period within just two to three quick visits over a couple of weeks.</li>
            <li>Ideal for individuals who prefer to avoid minor surgical procedures or lack adequate bone density.</li>
            <li>Modern dental bridges offer beautiful, natural-looking results that blend perfectly with your smile.</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Dental Implants vs Bridges Cost in Bangalore: The Real Value Breakdown
          </h3>

         <p>When examining the <Link href="/services/dental-implants" className="underline">dental implants vs bridges cost in Bangalore</Link>, MaxAlign Dental Clinic always balances everything between the initial upfront price and long-term maintenance costs.</p>
<p>Remember, the life of dental bridges is hardly close to 10 to 15 years. They will eventually need to be replaced.</p>
<p>On the other hand, dental implants require higher upfront investment. Because they rarely require replacement, dentists at MaxAlign give a shot to their patients by delivering the most cost-effective and stress-free financial choice. Yes, the treatment lasts a 20- to 30-year period. </p>
<p>At MaxAlign, you can avail transparent pricing and flexible EMI options to ensure your treatment remains entirely affordable. </p>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
           The Verdict 
          </h3>

          <p>
            Doing things in your favor isn’t everyone’s cup of tea. That’s why people choose the best dentists in Bangalore to get their dental implants and dental bridges Bangalore. 
          </p>

          <p>
            If you seek a lifetime solution that protects your natural jaw structure, do <Link className="underline" href="/appointment">book your consultation now at MaxAlign</Link>. 
          </p>

        </div>
      </div>
    </article>

    {/* ============== RIGHT SIDEBAR ============== */}
    <aside className="space-y-8">
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <h3 className="text-2xl font-bold text-[#0B7A75] mb-4">
          Latest Blogs
        </h3>

        <div className="space-y-4">
          {latestBlogs.map((blog, i) => (
            <Link
              key={i}
              href={blog.link}
              className="flex gap-4 items-start hover:opacity-90 transition group"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                width={80}
                height={80}
                className="rounded-xl object-cover shrink-0 w-20 h-20"
              />

              <div className="min-w-0 flex-1">
                <p className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-[#0B7A75] transition line-clamp-2">
                  {blog.title}
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  {blog.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Book Appointment CTA */}
        <Link
          href="/appointment"
          className="block mt-6 rounded-xl bg-gradient-to-r from-[#0A1F26] to-[#0B7A75] p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <p className="text-white font-bold text-lg">
            Ready for your best smile?
          </p>

          <p className="text-white/90 text-sm mt-1 mb-4">
            Expert care at Maxalign Dental
          </p>

          <span className="inline-block w-full py-3 px-6 rounded-lg bg-white text-[#0B7A75] font-semibold hover:bg-[#4EE0D4] hover:text-[#0A1F26] transition">
            BOOK APPOINTMENT
          </span>
        </Link>
      </div>
    </aside>

  </div>
</section>
      <section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 pb-20">
    <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F26] text-center">
      Frequently Asked Questions
    </h2>

    <div className="mt-10 max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="text-gray-800 font-bold text-lg">{faq.question}</span>
            <span className="text-gray-600 text-xl">
              {openIndex === index ? "-" : "+"}
            </span>
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="px-6 py-4 bg-white text-gray-700 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
      </div>
    </>
  );
}
