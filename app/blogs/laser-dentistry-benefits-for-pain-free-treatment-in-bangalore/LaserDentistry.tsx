"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LaserDentistry() {
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
    question: "Is laser dentistry Bangalore safe for children?",
    answer: "Yes, it is a much safer option for kids. There is no need to drill or use needles for procedures."
  },
  {
    question: "Can I get laser whitening if I have sensitive teeth?",
    answer: "Yes, many patients opt for laser whitening as they have sensitive teeth."
  },
  {
    question: "How much does painless dental treatment cost in Bangalore?",
    answer: "The treatment cost for painless oral treatment at Max Align is minimal compared to other dental clinics in Bangalore."
  },
  {
    question: "Can lasers be used for root canal treatments?",
    answer: "Yes, it is the most proven method in 2026 for root canal treatments."
  },
  {
    question: "Will I feel any heat during the painless dental treatment?",
    answer: "Well, not an excessive amount of heat, but yeah, you may experience a slight warm sensation."
  }
];
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const blogDate = {
  date: "23 May 2026"
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
           Laser Dentistry Benefits for Pain-Free Treatment in Bangalore
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
          <span>📅 23 May 2026</span>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-[#0B7A75]">
            Why Laser Dentistry Bangalore is the Ultimate Solution for Dental Anxiety
          </h2>
          <p>
            In recent days, the impact of dental drills and other effective procedures is getting more attention. Patients are keen to get the best dentistry without causing any pain. Then comes laser dentistry from the expert in Bangalore, <Link className="underline" href="/">MaxAlign</Link>.
          </p>

          <p>
            The laser’s precision allows our experts to target only the diseased area. That’s why many dentiLasers can perform delicate procedures on both hard and soft tissues. This means most patients experience a painless dental treatment with the right dentist.
          </p>

          <p>
            The laser treatment is designed to reduce the risk of post-treatment sensitivity. It is time to make your smile “prominent” once again. <Link className="underline" href="/appointment">Schedule your laser whitening session at Max Align now!</Link>
          </p>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Reasons to Choose Laser Dentistry Bangalore from MaxAlign
          </h3>

          <p>
            With MaxAlign, patients with dental issues are opting for the advantages of laser dental treatment in Bangalore over conventional methods.
          </p>

          <p>
            Let’s understand what the proven advantages they should prefer are:
          </p>

          <ul className="list-disc pl-6">
            <li>Eliminate the vibration and prevent dental phobia.</li>
            <li>Seamless and painless treatment</li>
            <li>Reduce the use of needles</li>
            <li>Easy to protect healthy enamel and gum tissue.</li>
            <li>Minimize physical discomfort with no physical touch.</li>
          </ul>

          <p>
            Experience laser dentistry Bangalore today – <Link className="underline" href="/contact">Book your consultation at Max Align!</Link>
          </p>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Revolutionizing Gum Care: The Precision of Laser Gum Treatment
          </h3>

          <p>
            Max Align offers a minimally invasive alternative. With the expertise, patients get the best laser gum treatment in Bangalore at our dental clinic; we never fail to offer painless dental treatment.
          </p>

          <p>
            That’s why patients can stimulate the body’s natural healing response, which helps the gums reattach to the tooth root more effectively.
          </p>

          <p>
            With laser treatment for gum, you can get the following advantages:
          </p>

          <ul className="list-disc pl-6">
            <li>Seals blood vessels</li>
            <li>Do not require stitches.</li>
            <li>Easy to kill 99% of harmful bacteria.</li>
            <li>Perfect for correcting uneven gum lines</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            The Unmatched Advantages of Laser Dental Treatment in Bangalore
          </h3>

          <p>
            When you choose Max Align, you opt for the best and post-operative dental treatment in Bangalore. The use of systematic treatment can give you a perfect experience in eating and speaking, including a healthier lifestyle.
          </p>

          <p>
            Key takeaways to understand the advantages of using Max Align’s premium features:
          </p>

          <ul className="list-disc pl-6">
            <li>Rapid Healing</li>
            <li>Lower Infection Risk</li>
            <li>Bloodless Procedures</li>
            <li>Versatility</li>
          </ul>

          <p>
            Experience the many advantages of laser dental treatment in Bangalore – visit Max Align for a superior dental journey.
          </p>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Faster Recovery and Post-Operative Comfort with Advanced Technology
          </h3>

          <p>
            With the painless dental treatment protocols at Max Align, you always get a smoother transition from the dentist’s chair back to your daily life. We make your healing process smoother and painless with the advanced laser painless dental treatment:
          </p>

          <ul className="list-disc pl-6">
            <li>Reduced Swelling</li>
            <li>Less Medication</li>
            <li>Immediate Clotting</li>
            <li>Comfortable Speech</li>
          </ul>

          <p>
            Don't let recovery time slow you down; choose painless dental treatment at Max Align for a faster return to life.
          </p>

          <h3 className="text-2xl font-bold text-[#0B7A75]">
            Conclusion
          </h3>

          <p>
            At Max Align, we combine the expertise of our specialists with advanced dental technology Bangalore to ensure that every visit is a positive one. The advantages of laser dental treatment in Bangalore are clear.
          </p>

          <p>
            Time to get a perfect smile, and it is just a laser beam away. Visit Max Align Dental Clinic in Bangalore now!
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
