"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopCosmeticBlog() {
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
    question: "How much does a full smile makeover cost in Bangalore?",
    answer: "The cost is minimal at MaxAlign Dental. Here, we provide customized packages starting from affordable bonding to premium porcelain veneers."
  },
  {
    question: "Can cosmetic dentistry fix missing teeth?",
    answer: "Yes, we can fix those missing teeth and bring the best aesthetic dental implants and porcelain to bridge the missing gaps."
  },
  {
    question: "Is the teeth whitening procedure at MaxAlign safe for my enamel?",
    answer: "Yes, we always prefer the best pH-neutral gels and advanced laser technology in teeth whitening procedures."
  },
  {
    question: "How long do porcelain veneers last?",
    answer: "The quality we provide in the veneers, it can last between 12 and 20 years."
  },
  {
    question: "Can I see my results before the treatment starts?",
    answer: "Yes, the virtual technology and 3D analysis can help you to visualize the before and after results."
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
           Top Cosmetic Dental Treatments Trending in Bangalore
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
              <span>📅 27 Apr 2026</span>
            </div>
 

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

<p>
Cosmetic dentistry is no longer a fashion, as it evolves as a beauty-upgrade option for many who want to give a perfect reshape to their tooth or oral healthcare routine.
</p>

<p>
At MaxAlign Dental, we recognize that a smile makeover Bangalore is a necessity. That’s why we treat every patient with perfection and bring the perfect blend of facial aesthetics with cutting-edge digital precision.
</p>

<p>
Are you seeking the best cosmetic dental treatments in Bangalore 2025? Take an appointment at MaxAlign to receive a complete makeover!
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">
Digital Smile Design (DSD): The Blueprint of Perfection
</h3>

<p>
When you consult at MaxAlign Dental, you get a high-tech preview where we use AI and 3D imaging technology. This allows our client to understand what the final result will be after the treatment.
</p>

<p>
With our best cosmetic dentist Bangalore, your smile is not going to be painful again. We give you the best makeover and show you how it looks before the procedure. That’s how you can compare your ‘before and after’ look.
</p>

<p>
With our program of smile makeover Bangalore, our dentists include the following aspects :
</p>

<ul className="list-disc pl-6">
<li>AI-guided measurements ensure 100% accuracy in tooth symmetry.</li>
<li>See a 3D mock-up of your "after" results during the first visit.</li>
<li>Open to the suggestions of patients</li>
<li>Focuses on how the smile fits the entire face, not just the mouth.</li>
</ul>

<p>
Ready to see your future smile in 3D? Book your Digital Smile Design session at MaxAlign Dental today!
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">
Biomimetic Dental Bonding & Teeth Reshaping
</h3>

<p>
Teeth reshaping and dental bonding are the go-to "lunchtime" procedures. We love to combine these procedures with teeth reshaping. That’s how we achieve remarkable results.
</p>

<p>
For patients, these treatments are natural and require only a single visit to our clinic.
</p>

<p>
With MaxAlign Dental, they can get the best teeth reshaping and veneers dental bonding, including the following benefits:
</p>

<ul className="list-disc pl-6">
<li>Cost-effective excellence</li>
<li>Pain-free treatment</li>
<li>Single-visit magic</li>
<li>Natural texture after the treatment</li>
</ul>

<p>
Fix those minor chips and gaps in a single hour! Contact the right smile transformation clinic for the best dental bonding in Bangalore.
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">
Laser Gum Contouring for the "Gummy Smile"
</h3>

<p>
It is the final touch in many of our best cosmetic dental treatments in Bangalore 2025 and 2026 plans.  We use precision procedures to give your smile a perfect makeover.
</p>

<p>
In the procedure, we use soft-tissue lasers to gently remove excess tissue. That is how we can expose more of your natural tooth and elevate your natural smile.
</p>

<p>
With this cosmetic dentistry Bangalore, a patient can get:
</p>

<ul className="list-disc pl-6">
<li>Symmetry boost</li>
<li>Rapid healing</li>
<li>Precision sculpting</li>
<li>Enhanced confidence</li>
</ul>

<p>
Visit MaxAlign to balance your beautiful smile!
</p>

<h3 className="text-2xl font-bold text-[#0B7A75]">Conclusion</h3>

<p>
Don't settle for anything less! At Max Align, you can have the finest smile makeover and the latest cosmetic transformation for your oral care. That’s why we are the best cosmetic dentist Bangalore and offer everything that a patient requires.
</p>

<p>
Your dream smile is just a consultation away—Visit MaxAlign Dental Now!
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
