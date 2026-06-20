"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function UltimateGuide() {
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
question: "How often should I visit a dental clinic Bangalore for routine check-ups?",
answer: "Dental checkup is healthy when a patient visits MaxAlign once every six months. Your schedule to get a routine dental check-up and professional cleaning keeps your oral health at a great level. We save you from complex and costly treatments later."
},
{
question: "What are the most important dentist selection tips for a family?",
answer: "Let’s get through the most important dentist selection tips shortly: Choose one that offers diverse treatments, ensure it maintains open communication, and provides flexible scheduling along with a comforting environment."
},
{
question: "Why is strict clinic hygiene so critical during dental procedures?",
answer: "Dental treatment can involve direct contact with saliva and blood. That’s why the sterilization protocol is necessary. It keeps patients away from infections. At Max Align, we prioritize the use of advanced autoclaves and disposable materials, keeping the environment safe for patients."
},
{
question: "How do I know if a clinic is a trusted dental clinic Bangalore option?",
answer: "The following attributes are the signs of a trusted dental clinic Bangalore: transparent pricing, verified Dental Council of India (DCI) registrations, high ratings, and positive testimonials. All of them are achieved by Max Align, making it a trustworthy facility."
},
{
question: "What technologies should the best dentist Bangalore use for treatments?",
answer: "The use of advanced tools like digital radiography, intraoral scanners, and dental lasers makes a dental clinic superior in 2026. At Max Align, we also provide faster recovery times with accurate diagnoses and treatment."
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
           The Ultimate Guide to Choosing a Dentist in Bangalore 
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
          src="/assets/blogs/dental-implants-vs-bridges-best-option-bangalore-maxalign.webp"
          alt="Featured Blog"
          width={900}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="p-10">
        <div className="flex items-center text-gray-500 gap-6 text-sm mb-6">
          <span>👤 Admin</span>
          <span>📅 20 Jun 2026</span>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-[#0B7A75]">
            Introduction: Vital Tips to Pick the Best Dentist Bangalore
          </h2>
          <p>
           The right dentist in Bangalore can transform your oral health. Improper care may affect your overall well-being. That’s why users should focus more on the right and best options. 
          </p>

          <p>
            At MaxAlign Dental Clinic, we have the best dentist Bangalore. Here we provide a clear strategy and cover essential dentist selection tips to help you choose confidently.  
          </p>
          <p>Book your dental assessment today at MaxAlign’s trusted dental clinic Bangalore!</p>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Primary Reasons to Check Before Selecting the Best Dental Clinic in Bangalore
          </h3>

          <p className="font-bold">A. Check Qualifications and Clinical Expertise </p>
<p>Before the appointment, the patient should verify the credentials first. It is the first phase of how to choose the right dentist in Bangalore. A top-tier <Link href="/services" className="underline">dental clinic Bangalore</Link> houses diverse specialists under one roof.</p>
<p>Yes, it is <Link href="/" className="underline">Max Align</Link> that has orthodontists, implantologists, and endodontists at one dental clinic. Whether it is about a routine checkup or complex smile design, we provide precise and evidence-based treatment.</p>

<p><Link href="tel:9321533345" className="underline">Consult our certified specialists right now for a personalized treatment plan!</Link></p>
<p className="font-bold">B. Inspect Clinic Hygiene and Advanced Technology </p>
<p>Never compromise on clinic hygiene. At Max Align, we have the state-of-the-art infrastructure. That’s how we can run the best facility. Each dentist at Max Align uses low-radiation digital X-rays, intraoral cameras, and painless laser tools. </p>
<p>Excellent dental centers follow international sterilization protocols. At MaxAlign, we also maintain pristine surgical environments.Here, we absolute patient safety and eliminate cross-infection risks.</p>

<p>Discover what world-class dental care feels like – Visit Max Align Dental now!</p>
<p className="font-bold">C. Read Real Patient Reviews and Testimonials</p>
<p>A <Link href="/gallery" className="underline">trusted dental clinic Bangalore</Link> will feature consistent support to its patients. At Max Align, we provide</p>

          <ul className="list-disc pl-6">
            <li>transparent pricing structure</li>
            <li>commitment to comfortable</li>
            <li>anxiety-free dental journeys</li>
          </ul>
          <p>These are the real attributes. Also, many of our happy patients have shared their thoughts online. Their honest opinion regarding communication, behavioral empathy, and post-treatment support are very useful. </p>
          <p>Join a trusted dental clinic Bangalore healthy smile family today!</p>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Conclusion
          </h3>

          <p>
            The identification trick is much easier for users. Now, they can understand how to choose the right dentist in Bangalore. This blog isn’t just about giving you clarity, but showing the commitment of Max Align’s clinic hygiene in Bangalore.  
          </p>

          <p>
            <Link href="/contact" className="underline">
              Join a trusted dental clinic Bangalore healthy smile family today!
            </Link>
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
