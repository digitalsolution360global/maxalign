"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StressOralHealthBlog() {
  const latestBlogs = [
    {
      title: "Do's and Don'ts After Teeth Whitening: Expert Tips from Bangalore Dentists",
      img: "/assets/blogs/dos-and-donts-after-teeth-whitening-bangalore-dentist-tips.webp",
      link: "/blogs/dos-and-donts-after-teeth-whitening-bangalore-dentist-tips",
      date: "29 Jun 2026"
    },
    {
      title: "Top 5 Benefits of Professional Teeth Whitening",
      img: "/assets/blogs/professional-teeth-whitening.webp",
      link: "/blogs/professional-teeth-whitening",
      date: "19-07-2025"
    },
    {
      title: "Why Max Align is one of the Best Dental Clinics in Marathahalli",
      img: "/assets/blogs/max-align-best-dental-clinic.webp",
      link: "/blogs/max-align-best-dental-clinic",
      date: "13-07-2025"
    },
    {
      title: "Common Dental Problems in Bangalore and How to Prevent Them",
      img: "/assets/blogs/common-dental-problems-bangalore.webp",
      link: "/blogs/common-dental-problems-bangalore",
      date: "09 Jan 2026"
    },
    {
      title: "How Technology is Changing Dentistry in Bangalore: From AI to Laser Treatments",
      img: "/assets/blogs/laser-dentistry-benefits-for-pain-free-treatment-in-bangalore.webp",
      link: "/blogs/dental-technology-bangalore-ai-laser-treatments",
      date: "15 Jan 2026"
    },
  ];

  const faqs = [
    {
      question: "How is stress involved in oral issues?",
      answer: "Tooth pain appears when a person is going through mental stress. It causes you to unconsciously clench your jaw. Finally, it leads to heavy pressure that strains your jaw muscles and irritates the nerves inside your teeth."
    },
    {
      question: "Can high stress cause gum bleeding?",
      answer: "Yes, this may happen because of chronic stress. This leads to inflammation, swelling, and bleeding gums."
    },
    {
      question: "What is the right treatment for teeth grinding and jaw pain?",
      answer: "Some natural treatments can give you the best results. Also, we provide clinical assistance through medication. Also, we insist that you should follow stress-relief habits and start meditating to get better results."
    },
    {
      question: "Why is my mouth becoming dry when I feel anxious?",
      answer: "It happens because higher stress reduces saliva formation. This lack of saliva creation causes dry mouth."
    },
    {
      question: "How often should busy professionals get a dental checkup?",
      answer: "For a clinical approach and strong benefits, Max Align dentists recommend visiting your dentist at least once every six months."
    },
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
              How Stress is Affecting Your Oral Health: A Growing Concern in Bangalore
            </h1>
          </div>
        </section>

        {/* ================== PAGE CONTENT ================== */}
        <section className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* ============== LEFT ARTICLE ============== */}
            <article className="md:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-hidden">
                <Image
                  src="/assets/blogs/stress-and-oral-health-bangalore.webp"
                  alt="How Stress is Affecting Your Oral Health – Max Align Bangalore"
                  width={900}
                  height={450}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="p-10">
                <div className="flex items-center text-gray-500 gap-6 text-sm mb-6">
                  <span>👤 Admin</span>
                  <span>📅 3 Jul 2026</span>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

                  {/* ---- Introduction ---- */}
                  <h2 className="text-2xl font-bold text-[#0B7A75]">
                    The Hidden Toll: How  Stress and Dental Health Are Interconnected in Corporate Hubs
                  </h2>

                  <p>
                    Many patients regularly overlook how emotional tension compromises their smiles. Just as you check your blood pressure and sugar level, oral healthcare is also important. In the modern lifestyle, it is vital to take care of oral hygiene and food on the same page.
                  </p>

                  <p>
                    Remember, physical burnout has turned <span className="font-bold">stress and dental</span>  health into a major talking point across Karnataka. That&apos;s why it is important to understand how stress affects teeth and gums in Bangalore and learn the steps to safeguard your oral health from modern lifestyle hazards.
                  </p>

                  {/* ---- Section 1 ---- */}
                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    1. Unmasking the Midnight Strain: Teeth Grinding and Jaw Pain
                  </h3>

                  <p>
                    This is the first and most crucial part. In this period, <a href="https://www.maxaligndental.com/" className="underline text-[#0B7A75]">Max Align&apos;s</a> dentists analyze bruxism and temporomandibular joint disorders as direct physical manifestations of underlying mental anxiety.
                  </p>

                  <p>
                    Also, we recommend that you visit immediately when you start experiencing the given symptoms:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://www.maxaligndental.com/services/gum-disease-treatment" className="underline text-[#0B7A75]">Jaw pain</a> and stiffness upon waking up</li>
                    <li>Rapid teeth grinding</li>
                    <li>Fractured enamel</li>
                    <li>Severe clenching</li>
                  </ul>

                  <p>
                    For different problems, we have specialized solutions. We provide customized <a href="https://www.maxaligndental.com/services/gum-disease-treatment" className="underline text-[#0B7A75]">treatment for teeth grinding and jaw pain</a> that protects structural alignment.
                  </p>

                  <p>
                    <strong>
                      Schedule a specialized jaw assessment today to protect your tooth enamel from midnight tension –{" "}
                      book your appointment here!
                    </strong>
                  </p>

                  {/* ---- Section 2 ---- */}
                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    2. The Silent Attackers: Gum Problems and Dry Mouth
                  </h3>

                  <p>
                    This is another problem that many patients face, but are usually unable to rectify it earlier. This happens because stress-induced immune suppression accelerates periodontal infections and stops natural saliva production.
                  </p>

                  <p>
                    Remember, high stress levels cause severe <span className="font-bold"> gum problems</span>, leading to bleeding and redness. Also, many reasons lead to gum problems and dry mouth, such as:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Reduced immune defense</li>
                    <li>Untreated chronic gingivitis</li>
                    <li>Emotional strain</li>
                    <li>A lack of protective saliva</li>
                    <li>Advanced periodontal damage</li>
                  </ul>

                  <p>
                    So, we need to fight back against these painful <span className="font-bold">gum problems</span>  because your body loses its ability to fight off oral infections on its own. You require prioritizing <span className="font-bold">oral health Bangalore</span>  by certified and experienced dentists. Yes, at Max Align, we deliver timely dental care that ensures these hidden infections are treated before they worsen.
                  </p>

                  {/* ---- Roadmap ---- */}
                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Max Align&apos;s Roadmap to Stress-Free Oral Wellness
                  </h3>

                  <p>
                    We prepare a perfect roadmap that leads you to achieve perfect oral health by addressing your everyday habits and expert clinical solutions:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mindful jaw tracking during work hours</li>
                    <li>Deep breathing exercises and yoga significantly</li>
                    <li>Custom-crafted nightguards act as a safe barrier</li>
                    <li>Drinking plenty of water throughout the day</li>
                    <li>Routine dental checkups catch early signs</li>
                  </ul>

                  {/* ---- Conclusion ---- */}
                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Conclusion
                  </h3>

                  <p>
                    From painful <span className="font-bold">teeth grinding</span>  to advanced <span className="font-bold">gum problems</span> , the journey will become easier when you choose Max Align Dental Clinic. Here, we provide professional treatment for teeth grinding and jaw pain.
                  </p>

                  <p>
                    At Max Align, we ensure your smile stays healthy and strong.{" "}
                    <a href="tel:9321533345" className="underline text-[#0B7A75]">Call us now</a> to  <Link className="underline text-[#0B7A75]" href="/appointment">book your personalized wellness consultation and protect your smile</Link>.
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
        </section >

        {/* ================== FAQ SECTION ================== */}
        < section className="bg-white" >
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
        </section >
      </div >
    </>
  );
}
