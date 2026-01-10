import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import servicesBanner from "../../assets/images/aboutbanner.jpg";
export default function PrivacyPolicy() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===================== BANNER ===================== */}
      <section className="relative w-full h-105 mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBanner})` }}
        />
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">
              Privacy Policy
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="w-10 h-0.5 bg-white/40" />
            </div>

            <div className="text-sm">
              <Link to="/" className="text-pink-600 font-medium">
                Home
              </Link>
              <span className="text-white mx-2">/</span>
              <span className="text-white">Privacy Policy</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </section>

      {/* ===================== CONTENT ===================== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-2">
            Privacy Policy
          </h2>

          <div className="flex justify-center items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            <span className="w-20 h-[1px] bg-gray-300 ml-2"></span>
          </div>

          {/* Intro */}
          <h3 className="text-2xl font-semibold mb-3">
            Auro Tech Solutions – Your Technology Partner
          </h3>

          <p className="text-gray-600 leading-7 mb-8">
            At Auro Tech Solutions, we develop innovative and reliable products
            and services. All of our technologies provide efficient solutions
            for your business needs. Auro Tech Solutions is a software
            development company based at No 182A, South Street, Pachur Post,
            Orathanadu Taluk, Thanjavur District. Founded on September 1st,
            2020, our core philosophy is
            <strong> “LEARN – EXECUTE – TEACH”</strong>.
          </p>

          {/* Terms */}
          <h3 className="text-2xl font-semibold mb-3">Terms and Conditions</h3>
          <p className="text-gray-600 mb-4">
            These terms and conditions outline the rules and regulations for the
            use of Auro Tech Solutions' website, located at{" "}
            <a href="#" className="text-blue-600">
              www.aurotechsolutions.in
            </a>
            .
          </p>

          <p className="text-gray-600 mb-6">
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Auro Tech Solutions if you do not
            agree to all of the terms stated here.
          </p>
          <p className="text-gray-600 mb-6">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement, and Disclaimer Notice: "Client", "You", and
            "Your" refers to you, the user of this website; "The Company",
            "Ourselves", "We", "Our", and "Us" refers to Auro Tech Solutions.
            "Party", "Parties", or "Us" refers to both the Client and ourselves.
          </p>

          {/* Cookies */}
          <h3 className="text-2xl font-semibold mb-3 mt-10">Cookies</h3>
          <p className="text-gray-600 mb-6">
            We use cookies to enhance functionality and improve user experience.
            By using our website, you agree to our{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
            . Cookies enable functionality and help us enhance user experience.
            Some of our affiliates or advertising partners may also use cookies.
          </p>

          {/* License */}
          <h3 className="text-2xl font-semibold mb-3">License</h3>
          <p className="text-gray-600 mb-4">
            Unless stated otherwise, Auro Tech Solutions and its licensors own
            the intellectual property rights for all content on this website.
            You may access this content for personal use, subject to the
            restrictions below:
          </p>

          <ul className="space-y-2 mb-8">
            {[
              "Do not republish material from Auro Tech Solutions.",
              "Do not sell, rent, or sub-license material.",
              "Do not reproduce or duplicate content.",
              "Do not redistribute content.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600">
                <span className="text-orange-500 mt-1">▶</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Comments */}
          <h3 className="text-2xl font-semibold mb-3">Comments</h3>
          <p className="text-gray-600 mb-4">
            Users can post comments in specific areas of the website. Auro Tech
            Solutions does not review comments before they are published.
            Comments reflect the views of the individuals who post them. We are
            not responsible for comments posted by users but reserve the right
            to remove any inappropriate or offensive comments.
            <br />
            <br />
            By posting comments, you confirm that:
            <br />
          </p>

          <ul className="space-y-2 mb-8">
            {[
              "You have the necessary rights to post comments.",
              "Comments do not infringe intellectual property.",
              "No unlawful or offensive content.",
              "You grant us license to use comments.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600">
                <span className="text-orange-500 mt-1">▶</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Hyperlinking */}
          {/* Hyperlinking */}
          <h3 className="text-2xl font-semibold mb-3">
            Hyperlinking to Our Content
          </h3>

          <p className="text-gray-600 mb-4">
            The following organizations may link to our website without prior
            approval:
          </p>

          {/* First List */}
          <ul className="space-y-2 mb-8">
            {[
              "Government agencies",
              "Search engines",
              "News organizations",
              "Online directory distributors",
              "System-wide accredited businesses",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600">
                <span className="text-orange-500 mt-1">▶</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Middle Paragraph (THIS WAS MISSING) */}
          <p className="text-gray-600 mb-6">
            We may consider additional link requests from other reputable
            organizations. All links must meet the following conditions:
          </p>

          {/* Second List */}
          <ul className="space-y-2">
            {[
              "They are not misleading or deceptive.",
              "They do not falsely imply endorsement or sponsorship.",
              "They fit within the context of the linking party’s site.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600">
                <span className="text-orange-500 mt-1">▶</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Content Liability */}
          <h3 className="text-2xl font-semibold mb-3">Content Liability</h3>
          <p className="text-gray-600 mb-6">
            We are not responsible for any content on third-party websites
            linked to ours. You agree to protect us against all claims arising
            from content on your website.
          </p>

          {/* Privacy Policy */}
          <h3 className="text-2xl font-semibold mb-3">Privacy Policy</h3>
          <p className="text-gray-600 mb-6">
            Our{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy{" "}
            </a>
            outlines how we handle your personal information, including
            collection, use, and disclosure. By using this site, you agree to
            our privacy practices.
          </p>

          {/* Disclaimer */}
          <h3 className="text-2xl font-semibold mb-3">Disclaimer</h3>
          <p className="text-gray-600">
            To the fullest extent permitted by law, Auro Tech Solutions
            disclaims all warranties and conditions related to the website. We
            are not liable for any loss or damage resulting from the use of this
            website.
          </p>
        </div>
      </section>
      {/* Footer Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* ===================== SCROLL TO TOP ===================== */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-20 h-12 rounded-full bg-red-600 text-white text-xl shadow-lg hover:scale-110 transition"
        >
          ↑
        </button>
      )}
    </>
  );
}
