"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BestCosmeticBlog() {
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
    question: "How long is the lifespan of the dental veneers?",
    answer: "At MaxAlign, our dental veneers last over 10 years. With extensive care, you can boost it up to 15 years."
  },
  {
    question: "What is the difference between dental bonding and veneers?",
    answer: "Bonding represents the joining of colored resin for teeth. On the other hand, veneers are custom-made shells. At MaxAlign, you get premium treatment in every treatment."
  },
  {
    question: "Why is MaxAlign the best cosmetic dentist?",
    answer: "At MaxAlign, patients get the best treatment from an elite team of dentists using cutting-edge technology. We follow a patient-first philosophy with a higher success rate and advanced smile correction methods customized for every group of patients."
  },
  {
    question: "How much does a smile makeover cost in Bangalore?",
    answer: "We always maintain transparency in our pricing with detailed quotes so that patients can get a comprehensive idea about the smile correction services and plan accordingly."
  },
  {
    question: "What should I expect during a cosmetic dental consultation?",
    answer: "We, at MaxAlign, provide the following dental care: Thorough oral exam, 3D imaging or scans, complete aesthetic goals, and a customized treatment plan."
  }
];
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const blogDate = {
  date: "03 Mar 2026"
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
           How To Choose The Right Dentist for Cosmetic Dentistry in Bangalore
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
              <span>📅 03 Mar 2026</span>
            </div>
 

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

<h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75]">
Introduction: The Journey to Your Perfect Smile
</h2>

<p>
A happy life is incomplete without proper oral healthcare and healthy teeth. However, keeping your smile and gums healthy and natural requires the assistance of the right oral healthcare and personal maintenance routine.
</p>

<p>
In an image-conscious city like <Link className="underline" href="https://en.wikipedia.org/wiki/Bengaluru" target="_blank">Bangalore</Link>, finding a trusted cosmetic dentist can be challenging. So, as an aware patient, it is always advised to find someone whom you can rely on. So, checking the track record of a dental clinic is important before being willing to get the transformative results.
</p>

<p>
With <Link className="underline" href="/">MaxAlign</Link>, we built trust with our precious services and smile makeovers. It’s not just about transforming your teeth but keeping the dental aesthetics alive in the entire market. Whether you are looking for a healthy smile, you require the right treatment, starting from teeth reshaping, dental veneers, dental bonding, etc.
</p>

<p>
Let’s complete your search <strong>“how to find the best cosmetic dentist in Bangalore”!</strong> Join MaxAlign to get the finest treatment from a trusted cosmetic dentist Bangalore!
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">
Evaluate Clinical Expertise & Specialization
</h3>

<p>
First, before looking for better expertise in a dental clinic, you always evaluate its performance. In a city like Bangalore, patients need to search for the following attributes:
</p>

<ul className="list-disc pl-6">
<li>Count the educational background and experience of dentists.</li>
<li>Understand the clinic's golden success rate.</li>
<li>Check dental care programs.</li>
<li>Check smile design and collusion.</li>
<li>Verify the best cosmetic dentistry abilities.</li>
</ul>

<p>
A trusted <strong>cosmetic dentist Bangalore</strong> will be happy to walk you through their past work, explaining the rationale behind choosing specific treatments like dental veneers or teeth reshaping for those particular cases.
</p>

<p>
At MaxAlign, patients not only get the right treatment from our side, but we also understand their concerns and provide them with the right treatment they deserve.
</p>

<p>
Ready to meet the experts who have transformed thousands of smiles? Book your cosmetic dental consultation with MaxAlign today and see the difference expertise makes.
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">
The Power of Advanced Smile Design Technology
</h3>

<p>
In 2026, advanced technology always feels empty. At MaxAlign, we maintain the latest equipment, employ trained dentists, and utilize experienced operators to assist with the entire process. When you choose a dental clinic for improved <strong>smile correction services</strong>, let’s take a look at the services that we offer to get a cosmetic dental consultation:
</p>

<ul className="list-disc pl-6">
<li>Get the right Digital Smile Design (DSD)</li>
<li>Take high-resolution 3D scans.</li>
<li>Create a digital mock-up for a future smile.</li>
<li>Provide revolutionized dental veneers.</li>
<li>Smooth laser technology for teeth reshaping.</li>
</ul>

<p>
At MaxAlign, our facility is equipped with the latest diagnostic and therapeutic tools. This is how we keep patients’ smiles alive with our elegant smile correction services.
</p>

<p>
Experience the future of dentistry with our 3D imaging and digital previews. Contact MaxAlign to visualize your dream smile with our advanced smile design technology.
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">
Get in Touch with Advanced Key Procedures: Veneers, Bonding, and Reshaping
</h3>

<p>
Complete dental care is rare to find. Different dentists offer various oral healthcare services at different prices. However, getting the right treatment should be a major concern within a limited cost, as patients in Bangalore always seek hygiene and total transformation.
</p>

<p>
Let’s take a look at the advanced services that MaxAlign offers in its <strong>cosmetic dental consultation</strong> in Bangalore:
</p>

<ul className="list-disc pl-6">
<li>Get the dental bonding for smaller imperfections and get budget-friendly treatment.</li>
<li>Achieve a perfect look by removing challenges and changing the length or shape of the teeth using an advanced teeth reshaping method.</li>
<li>Choose veneers for more durable and better smile correction opportunities at MaxAlign.</li>
</ul>

<p>
Not sure which treatment is right for you? Schedule a visit to MaxAlign for a detailed breakdown of dental veneers, bonding, and reshaping options.
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">Conclusion</h3>

<p>
Are you seeking a more confident version of yourself? Get in touch with the finest dental care in Bangalore at MaxAlign! We stand as the best cosmetic dental clinic in the city, providing world-class facilities with skilled and experienced dentists at our dental clinic. Let’s evolve your smile design and get the finest results to look more beautiful and elegant.
</p>

<p>
Your journey to a radiant, life-changing smile starts with a single, informed decision—choose excellence, choose MaxAlign.
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
                  <Link key={i} href={blog.link} className="flex gap-4 items-start hover:opacity-90 transition group">
                    <Image src={blog.img} alt={blog.title} width={80} height={80} className="rounded-xl object-cover shrink-0 w-20 h-20" />
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-[#0B7A75] transition line-clamp-2">{blog.title}</p>
                      <p className="text-gray-500 text-xs mt-1">{blog.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
              {/* Book Appointment CTA */}
              <Link href="/appointment" className="block mt-6 rounded-xl bg-gradient-to-r from-[#0A1F26] to-[#0B7A75] p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <p className="text-white font-bold text-lg">Ready for your best smile?</p>
                <p className="text-white/90 text-sm mt-1 mb-4">Expert care at Maxalign Dental</p>
                <span className="inline-block w-full py-3 px-6 rounded-lg bg-white text-[#0B7A75] font-semibold hover:bg-[#4EE0D4] hover:text-[#0A1F26] transition">BOOK APPOINTMENT</span>
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
