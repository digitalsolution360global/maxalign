"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EmergencyToothache() {
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
      title: "Top 7 Dental Care Tips To Keep Your Smile Healthy This Winter",
      img: "/assets/blogs/winter-dental-care.webp",
      link: "/blogs/top-7-dental-care-tips-to-keep-your-smile-healthy-this-winter",
      date: "15 Jan 2026"
    },
  ];
  const faqs = [

{
  question: "How to book an emergency appointment at Max Align at night?",
  answer: "You can book an immediate visit through our streamlined online booking platform. We are operational across Marathahalli and the nearby territories too: Brookefield, Kundalahalli, Kartik Nagar, Panathu, Yemalur, Whitefield, and Kadubeesanahalli."
},

{
  question: "What to do for emergency dental care for a baby at night?",
  answer: "During an emergency and sudden pain, parents should rinse their mouth gently with warm salt water and apply a cool compress to their cheek. Also, do not delay connecting with Max Align’s paediatric dentist Marathahalli immediately."
},

{
  question: "Can a late-night toothache clear up on its own by morning?",
  answer: "Most late-night toothaches are not curable. Before it’s too late, visit Max Align’s emergency dentist Marathahalli."
},

{
  question: "How can I identify when to go for an emergency root canal or filling?",
  answer: "Severe and throbbing pain is the clear sign that your internal nerve is causing the pain. That’s why it requires a specialized root canal dentist Marathahalli at Max Align."
},

{
  question: "Is it okay to get clear aligners during the emergency dental work?",
  answer: "Yes, you can. In the emergency fixing, our invisalign dentist Marathahalli can evaluate your smile to design a custom alignment plan."
}

];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const blogDate = {
    date: "09 Jan 2026"
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
              Toothache at Night? Here’s How an Emergency Dentist in Marathahalli Can Help

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
                  src="/assets/blogs/dos-and-donts-after-teeth-whitening-bangalore-dentist-tips.webp"
                  alt="Featured Blog"
                  width={900}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-10">
                <div className="flex items-center text-gray-500 gap-6 text-sm mb-6">
                  <span>👤 Admin</span>
                  <span>📅  17 Jul 2026</span>
                </div>


                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">



                 <p>
                    Dental care is important whether it’s day or night. During an emergency toothache at night, you need the right support. Whether caused by deep infection, cracked enamel, or sudden trauma, <a href="https://www.maxaligndental.com/">Max Align is the right solution!</a>
                    </p>

                    <p>
                    At Max Align, we offer rapid, compassionate care driven by an experienced <a href="https://www.maxaligndental.com/services">emergency dentist Marathahalli</a> team to restore your comfort without delay. Our clinic provides complete, modern care tailored to your family's needs.
                    </p>

                    <p>
                    Whether it’s about a <strong>pediatric dentist Marathahalli</strong> or expert consultation for adults, we have it all. Max Align combines quick emergency triage with comprehensive general and cosmetic dental procedures.
                    </p>

                    <p>
                    Avail quick dental solutions across Marathahalli alongside Brookefield, Kundalahalli, Nagar, Kartik Kadubeesanahalli, Panathur, Yemalur, and Whitefield – <a href="tel:9321533345">book your slot by clicking here</a>!
                    </p>

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Navigating the Challenge of Tooth Decay in Urban Bangalore
                  </h3>

                  <p>
                    Tooth decay is always a major issue for any patient who has not followed a proper oral healthcare routine. After consuming sugary or starchy foods, it is always recommended to rinse your mouth and brush properly.
                  </p>

                  <p>
                    Lack of basic treatment lets the bacteria in your mouth produce acids that eat away at your enamel. Having sticky processed foods and acidic beverages like carbonated drinks and specialty coffees accelerates this process.
                  </p>

                  <p>
                    You should know how to deal with such gum diseases and other dental problems Bangalore. With MaxAlign, everything is possible as we provide a complete preventive dentistry treatment without fail.
                  </p>

                  <p>
                    By choosing us, you ensure that early lesions are detected using AI-driven diagnostics before they turn into painful cavities, keeping your natural teeth intact for years to come.
                  </p>

                  <p>
                    The expert dental care in Bangalore is at your nearest center, as we operate as one of the finest dental care service providers in the city.
                  </p>

                  <p>
                    <strong>Don’t let a tiny cavity turn into a major headache. Schedule your preventive screening at MaxAlign today!</strong>
                  </p>

                 <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Common Problems Associated with Late-Night Toothaches – Find the Urgent Dental Care Solutions!
                    </h3>

                    <p>
                    Max Align offers fast diagnostics to pinpoint exact pain sources and deliver prompt care. That’s why patients don’t think much and call us immediately for quick treatment at night.
                    </p>

                    <p>
                    Follow the table to understand what you can do first:
                    </p>

                    <table className="w-full border border-gray-200">

                    <thead>
                    <tr className="bg-gray-100">

                    <th className="border p-3 text-left">Common Cause of Pain</th>
                    <th className="border p-3 text-left"> Why Choose Max Align? </th>

                     </tr>
                    </thead>


                    <tbody>

                    <tr>

                    <td className="border p-3"> Deep Cavities and Pulp Inflammation  </td>
                    <td className="border p-3">
                    A specialized <a href="https://www.maxaligndental.com/services/cavity-treatment">root canal dentist Marathahalli</a> at Max Align can remove infected pulp, eliminate pain instantly, and seal the tooth securely.
                    </td>

                    </tr>


                    <tr>

                    <td className="border p-3">  Dental Trauma, Chips, and Fractures</td>
                    <td className="border p-3">
                    Quick treatment protects exposed nerves from environmental exposure and sensitivity.
                    </td>
                    </tr>
                     <tr>

                    <td className="border p-3">
                    Dental Abscesses and Infections
                    </td>

                    <td className="border p-3">
                    Emergency intervention prevents bacteria from spreading to adjacent jaw tissue.
                    </td>

                    </tr>


                    <tr>

                    <td className="border p-3">
                    Pediatric Night Emergencies
                    </td>

                    <td className="border p-3">
                    A gentle <strong>pediatric dentist Marathahalli</strong> ensures young patients receive calm, efficient treatment without dental anxiety.
                    </td>

                    </tr>


                    <tr>

                    <td className="border p-3">
                    Cracked Restorations or Lost Fillings
                    </td>

                    <td className="border p-3">
                    Visit our dental clinic, as this pain happens because the raw dentin becomes vulnerable to hot, cold, and air pressures, triggering sharp pain spikes.
                    </td>

                    </tr>


                    </tbody>

                    </table>


                    <p>
                    <strong>
                        Stop guessing your toothache cause—reach out to Max Align without making any delay!
                    </strong>
                    </p>

                 <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Comprehensive Dental Treatments Offered at Max Align
                    </h3>
                <p>
                There is no issue with having the best smile that completes your look. Our specialized <strong>dental implant clinic Marathahalli</strong> provides permanent, natural-looking solutions.
                </p>
                <p>
                Get comprehensive support and emergency dental care during the night time as well at Max Align Dental Clinic. Our dentists deliver reliable access and quick urgent scheduling when you need it most.
                </p>
                <p>
                Let’s explore what else you can have in the entire spectrum of dental treatments, offered and designed by the professionals of Max Align in Marathahalli, Bengaluru:
                </p>

                <h3 className="text-xl font-bold text-[#0B7A75]">
                MAX ALIGN CARE SPECTRUM
                </h3>
                <table className="w-full border border-gray-200">
                <thead>
                <tr className="bg-gray-100">
                <th className="border p-3 text-left">
                Urgent Interventions
                </th>
                <th className="border p-3 text-left">
                Preventive & Restorative Care
                </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td className="border p-3">
                <ul className="list-disc pl-5 space-y-2">
                <li> Emergency Pain Relief </li>
                <li>Emergency Root Canal Treatment</li>
                <li>Trauma & Fracture Stabilization</li>
                </ul>
                </td>
                <td className="border p-3">
                <ul className="list-disc pl-5 space-y-2">
                <li>Routine <strong>Teeth Cleaning Marathahalli</strong></li>
                <li>Comprehensive Family Dentistry</li>
                <li>Kids' Dentistry & Fluoride Treatments</li>
                </ul></td>
                </tr>
                </tbody>
                </table>

                <table className="w-full border border-gray-200 mt-6">
                <thead>
                <tr className="bg-gray-100">
                <th className="border p-3 text-left">Aesthetic & Alignment Solutions</th>
                <th className="border p-3 text-left">Advanced Tooth Replacement</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td className="border p-3">
                Our dentists use aesthetic enhancements like a complete <strong>smile makeover Marathahalli</strong> to ensure your teeth stay healthy and vibrant.
                </td>
                <td className="border p-3">
                Also, as a trusted <strong>family dental clinic Marathahalli</strong>, we support patients of every age with advanced dental solutions.
                </td>
                </tr>
                </tbody>
                </table>
                <p>
                Let’s not forget about the true capabilities of our dentists when they start operating for specific dental cases, such as:
                </p>



                    <ul className="list-disc pl-6 space-y-3">
                    <li>
                    Permanent tooth replacement options are provided by our top <strong>dental implant clinic Marathahalli</strong>.
                    </li>
                    <li>
                    An in-house <strong>orthodontist in Marathahalli</strong> handles structural bite realignment expertly.
                    </li>
                    <li>
                    Discreet clear alignment options are available via an experienced <strong>invisalign dentist Marathahalli</strong>.
                    </li>
                    <li>
                    Our <strong>cosmetic dentist in Marathahalli</strong> provides aesthetic enhancements including custom smile design.
                    </li>
                    <li>
                    Routine maintenance includes detailed <strong>teeth cleaning Marathahalli</strong> and preventive checkups.
                    </li>
                    <li>
                    Patients searching for a <strong>24 hours dentist Marathahalli</strong> receive rapid priority scheduling support.
                    </li>
                    </ul>
                    <p>
                    <strong>
                        Wait no further – transform your smile by scheduling your visit with Max Align today!
                    </strong>
                    </p>

                    <h3 className="text-2xl font-bold text-[#0B7A75]">
                    First-Aid Steps to Manage Tooth Pain Before Reaching Max Align
                    </h3>
                    <p>
                    A toothache never appears by informing the patient while having sleep. Dental problems during the night won’t give you the comfort and a simple sleep cycle. Before it ruins your night, you should do something first.
                    </p>
                    <p>
                    So, when you experience sudden unbearable pain, you can follow the given procedure before reaching our dental clinic:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3">
                    <li>
                    Use half a teaspoon of salt and warm water, mix both, and use the lukewarm water to clear debris and reduce gum inflammation.
                    </li>
                    <li>
                    Be gentle while removing the food particles between throbbing teeth. Try not to exert unnecessary pressure.
                    </li>
                    <li>
                    The best thing to do is to add extra pillows while sleeping.
                    </li>
                    <li>
                    Never place aspirin tablets directly against your gums.
                    </li>
                    <li>
                    Hold an ice pack wrapped in a towel against your outer cheek in 15-minute intervals to numb discomfort.
                    </li>
                    </ol>
                    <p>
                    Early contact with an <strong>emergency dentist Marathahalli</strong> specialist prevents complications. Apply these quick relief steps and call Max Align immediately!
                    </p>

                  <h3 className="text-2xl font-bold text-[#0B7A75]">
                    Conclusion
                  </h3>

                  <p>
                   With dedicated care from an emergency dentist Marathahalli and pediatric dentist Marathahalli team at Max Align, we provide faster care and an effective overnight solution for your nighttime toothache. 
                    </p>

                  <p>
                    Our comprehensive services guarantee healthy, radiant smiles for your whole family. Connect with Max Align today for immediate, world-class dental care! 

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
