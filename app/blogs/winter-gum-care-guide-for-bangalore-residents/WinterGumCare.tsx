"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WinterGumCareBlog() {
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
    question: "Why do my gums bleed more during the winter in Bangalore?",
    answer: "Due to dry weather, saliva production reduces compared to normal days of the year. These days, gum tissues are brittle and prone to inflammation. So, we recommend visiting MaxAlign Dental and identifying the cause sooner."
  },
  {
    question: "Can the cold Bangalore morning air cause gum pain?",
    answer: "Yes, cold weather and sudden changes in the atmosphere may cause the nerves in your teeth and the blood vessels in your gums to react."
  },
  {
    question: "Is \"dry gums\" a real condition I should worry about?",
    answer: "Yes, it is a type of gum disease in Bangalore that you need to treat immediately. Otherwise, it will cause serious gum disease."
  },
  {
    question: "How can I prevent my gums from receding in the winter?",
    answer: "At MaxAlign Dental, we recommend keeping up with gentle brushing of your teeth and staying hydrated."
  },
  {
    question: "Are there any specific foods in Bangalore that help with winter gum care?",
    answer: "You should choose Vitamin C-rich foods, like Amla, to help your gum health during the winter in Bangalore."
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
           Understanding the Impact of Bangalore Winters on Your Gums
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
              <span>📅 11 Apr 2026</span>
            </div>
 

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

<h2 className="text-3xl md:text-4xl font-bold text-[#0B7A75]">
Introduction
</h2>

<p>
The drop in temperature is inevitable in different cases for many people living in Bangalore. The crisp weather should not impact your gum health at all. That’s the time when people face dry gums and inflammation. 
</p>

<p>
  To counter all the odds related to your gum health, MaxAlign Dental is the ultimate solution. Do not waste your time delaying treatment and accept seasonal treatment. 
</p>
<p>
  During these months, bleeding <Link href="/services/gum-disease-treatment" className="underline">gums diseases</Link> occur often, too. Without a targeted oral care routine, these factors combine to create the perfect storm for early-stage gingivitis</p>

<p>
<strong>Don’t Wait! Book a Winter Checkup at MaxAlign Dental and keep your gums glowing</strong>
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">
Why Dry Gums Lead to Bleeding: The Science of Winter Irritation
</h3>

<p>
Healthy gums are unachievable without a proper oral healthcare routine. To count all the biological or ecological challenges, a person should take care of their dry gum first. 
</p>

<p>
When gums are dry, they lose their ability to act as a tight seal around your teeth, allowing bacteria to slip underneath the gumline more easily. Sometimes, bleeding gums in winter is a noticeable disease. 
</p>
<p>To combat <strong>gum disease in Bangalore, MaxAlign Dental</strong> takes the best steps for its patients. The dentists here follow the given strategies:</p>

<ul className="list-disc pl-6">
<li>Check for tissue fragility</li>
<li>Counter the mount breathing problem</li>
<li>Provide an inflammatory response</li>
<li>Stop the bacterial growth</li>
</ul>

<p>
When it comes to providing the <strong>oral care routine,</strong> we will suggest the following: 
</p>

<ul className="list-disc pl-6">
<li>Avoid ice-cold tap water</li>
<li>Use a soft-bristled brush</li>
<li>Choose mouthwashes</li>
<li>Use a humidifier to counteract the drying effects</li>
</ul>

<p>
<strong><Link href="/contact" className="underline">Consult us</Link> for a personalized care plan! Schedule your MaxAlign consultation and smile through the frost!</strong>
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">
    Professional Preventive Gum Care at MaxAlign Dental
  </h3>

  <p>
    Professional dental care is not recommended, but earned through MaxAlign Dental’s <strong>preventive gum care Bangalore.</strong> Here, you will understand <strong>how to prevent gum bleeding in winter in Bangalore</strong> with distinctive care and treatment.
  </p>

  <p>
    We pride ourselves on offering affordable dental care without compromising quality. Let’s take a look at the services we provide as genuine treatments for the <strong>gum protection in winter:</strong>
  </p>

  <ul className="list-disc pl-6">
    <li>Deep cleaning</li>
    <li>Advanced diagnostics for gum diseases</li>
    <li>Proactive treatments</li>
    <li>Affordability</li>
  </ul>

  <p>
    <Link href="tel:9321533345" className="underline">Book</Link> your affordable cleaning at MaxAlign Dental today!
  </p>

  <h3 className="text-2xl font-bold text-[#0B7A75]">
    Conclusion
  </h3>

  <p>
    Your oral health is in your hands all the time. At MaxAlign Dental, we give you authentic dental treatment and provide you with the best oral health during the dryness of winter.
  </p>

  <p>
    Let the experts at MaxAlign help you transition through the cold months with a bright, healthy, and pain-free smile.
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
