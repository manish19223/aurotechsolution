// src/components/career/Career.jsx

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Animation Hook
const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Stop observing once animated
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px", ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};

import servicesBanner from "../../assets/images/aboutbanner.jpg";
import FunWorkImg from "../../assets/images/fun-friday.jpg";
import GrowthImg from "../../assets/images/fun-friday.jpg";
import careerParallaxBg from "../../assets/images/icons/vbanner.jpg"; // ← CTA parallax ke liye image

const JOBS = [
  {
    id: "job1",
    indexLabel: "01.",
    titleShort: "Mobile Application Developer",
    heading: "Auro Tech solutions Recruitment – Mobile App Developer Opening",
    meta: [
      ["Job Role", "Mobile Application Developer"],
      [
        "Required Skills",
        "Excellent Knowledge in App Development Programming.",
      ],
      [
        "Year of Experience",
        "Developers Preferred Minimum 1+ year of Experience.",
      ],
      [
        "Job Location",
        "No 182A, South Street Pachur Post, Orathanadu Thaluk, Thanjavur District",
      ],
      ["No. of Opening", "2"],
    ],
    descriptionTitle: "App Developers Job Description :",
    description:
      "We are looking for a dedicated Application Developer to work with customers to develop new software applications and update and modify existing applications. The Application Developer processes users' needs to customize the software for computer programs, designs prototype applications, implements, and tests source code and troubleshoots software applications. To be successful as an Application Developer, you should have a sound knowledge of software engineering as well as excellent analytical skills.",
    responsibilitiesTitle: "App Developer Responsibilities:",
    responsibilities: [
      "Understand client requirements and how they translate in application features",
      "Collaborate with a team of IT professionals to set specifications for new applications",
      "Design creative prototypes according to specifications",
      "Write high quality source code to program complete applications within deadlines",
      "Perform unit and integration testing before launch",
      "Conduct functional and non-functional testing",
      "Troubleshoot and debug applications",
      "Evaluate existing applications to reprogram, update and add new features",
      "Develop technical documents and handbooks to accurately represent application design and code",
    ],
    requirementsTitle: "App Developer Requirements:",
    requirements: [
      "Bachelor’s degree in B.Sc / MCA / BCA / IT computer science Engineering & Arts, or else related field.",
      "Fluency or understanding of specific languages, such as Java, Flutter (DART), Kotlin, Swift and other related languages are required.",
      "Experience in designing and building applications.",
      "Strong understanding of the app development cycle and programming techniques and tools.",
      "Focus on efficiency, user experience, and process improvement.",
      "Excellent project and time management skills.",
      "Strong problem solving and verbal and written communication skills.",
      "Ability to work independently or with a group.",
      "Willingness to sit at desk for extended periods.",
      "Solid knowledge and experience in programming applications.",
      "Dedicated team player & Connect Frequently with Team.",
      "Ability to thrive in a fast-paced environment.",
      "Solid ability in both written and verbal communication.",
      "Knowledge of advanced / future programming language and technical terminology.",
      "Able to develop ideas and processes and clearly express them.",
      "Able to solve complex problems & quick learning new programming knowledge.",
    ],
  },
  {
    id: "job2",
    indexLabel: "02.",
    titleShort: "Back-End Developer",
    heading: "Auro Tech solutions Recruitment – Back End Web Developer Opening",
    meta: [
      ["Job Role", "Back-End Web Developer"],
      [
        "Required Skills",
        "Excellent Knowledge in Web Development Programming.",
      ],
      [
        "Year of Experience",
        "Developers Preferred Minimum 1+ year of Experience.",
      ],
      [
        "Job Location",
        "No 182A, South Street Pachur Post, Orathanadu Thaluk, Thanjavur District",
      ],
      ["No. of Opening", "2"],
    ],
    descriptionTitle: "Back-End Web Developer Job Description :",
    description:
      "We are looking for an analytical, results-driven Back-end Developer who will work with team members to troubleshoot and improve current back-end applications and processes. The Back-end Developer will use their understanding of programming languages and tools to analyze current codes and developments for more efficient processes, solve problems, and create a more seamless experience for users.",
    responsibilitiesTitle: "Back-End Developer Responsibilities:",
    responsibilities: [
      "Compile and analyze data, processes, and codes to troubleshoot problems and identify areas for improvement.",
      "Collaborate with the front-end developers and other team members to establish objectives and design more functional, cohesive codes.",
      "Develop ideas for new programs, products, or features by monitoring industry developments and trends.",
      "Record data and report it to proper parties, such as clients or leadership.",
      "Perform unit and integration testing before launch",
      "Conduct functional and non-functional testing",
      "Participate in continuing education and training to remain current on best practices.",
      "Learn new programming languages, and better assist other team members.",
      "Evaluate existing applications to reprogram, update and add new features. Taking lead on projects, as needed.",
      "Develop technical documents and handbooks to accurately represent application design and code",
    ],
    requirementsTitle: "Back-End Developer Requirements:",
    requirements: [
      "Bachelor’s degree in B.Sc / MCA / BCA / IT computer science Engineering & Arts, or else related field.",
      "Fluency or understanding of specific languages, such as Java, PHP, or Python, and operating systems may be required.",
      "Experience in designing and building live environment applications.",
      "Strong understanding of the web development cycle and programming techniques and tools.",
      "Focus on efficiency, user experience, and process improvement.",
      "Excellent project and time management skills.",
      "Strong problem solving and verbal and written communication skills.",
      "Ability to work independently or with a group.",
      "Willingness to sit at desk for extended periods.",
      "Solid knowledge and experience in MYSQL & other back end programming applications.",
      "Dedicated team player & Connect Frequently with Team.",
      "Ability to thrive in a fast-paced environment.",
    ],
  },
  {
    id: "job3",
    indexLabel: "03.",
    titleShort: "Front End Developer",
    heading: "Auro Tech solutions Recruitment – Front End Developer Opening",
    meta: [
      ["Job Role", "Front End Developer"],
      ["Required Skills", "Excellent Knowledge in UI Development Programming."],
      [
        "Year of Experience",
        "Developers Preferred Minimum 1+ year of Experience.",
      ],
      [
        "Job Location",
        "No 182A, South Street Pachur Post, Orathanadu Thaluk, Thanjavur District",
      ],
      ["No. of Opening", "2"],
    ],
    descriptionTitle: "Front End Developer Job Description :",
    description:
      "We are looking for a motivated Front End Developer who can build responsive, accessible and modern UI. You will work with designers and backend developers to deliver fast and clean user experiences.",
    responsibilitiesTitle: "Front End Developer Responsibilities:",
    responsibilities: [
      "Build reusable UI components and maintain consistent design system.",
      "Translate designs into high quality responsive pages.",
      "Optimize performance for mobile and desktop.",
      "Collaborate with backend team to integrate APIs.",
      "Ensure accessibility and cross-browser compatibility.",
    ],
    requirementsTitle: "Front End Developer Requirements:",
    requirements: [
      "Strong HTML, CSS, JavaScript knowledge.",
      "Experience with React and modern tooling.",
      "Good UI/UX sense and attention to detail.",
      "Ability to work independently and in team.",
      "Strong communication skills.",
    ],
  },
];

function PlusIcon({ open }) {
  return (
    <span
      className={`inline-flex w-10 h-10 items-center justify-center rounded-full border border-gray-200
      text-xl font-bold transition ${
        open ? "rotate-45 bg-gray-50" : "bg-white"
      }`}
      aria-hidden="true"
    >
      +
    </span>
  );
}

export default function Career() {
  const jobs = useMemo(() => JOBS, []);
  const [openId, setOpenId] = useState(jobs[0]?.id ?? null);

  // Image animation refs
  const funWorkImageRef = useRef(null);
  const whyWorkImageRef = useRef(null);

  // Image animation states
  const funWorkImageVisible = useIntersectionObserver(funWorkImageRef);
  const whyWorkImageVisible = useIntersectionObserver(whyWorkImageRef);

  // Form state & handlers
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
    about: "",
    resume: null,
  });

  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleApplyNow = () => {
    setShowApplicationForm(true);
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  // Send career application to backend API
  const submitJobApplication = async (formData) => {
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.mobile); // API expects 'phone'
    submitData.append("position", formData.position);
    submitData.append("experience", formData.about); // API expects 'experience'
    submitData.append("message", formData.about); // API expects 'message'

    if (formData.resume) {
      submitData.append("resume", formData.resume);
    }

    const response = await fetch("/api/career", {
      method: "POST",
      body: submitData,
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return {
        success: true,
        message: data.message,
      };
    } else {
      throw new Error(data.message || "Application submission failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("");

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.position ||
      !formData.resume
    ) {
      setSubmitStatus("error");
      setSubmitMessage("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitJobApplication(formData);
      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          position: "",
          about: "",
          resume: null,
        });
        setTimeout(() => {
          setShowApplicationForm(false);
          setSubmitMessage("");
          setSubmitStatus("");
        }, 4000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= CAREER BANNER ================= */}
      <section className="relative w-full h-105 mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${servicesBanner})`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">
              Apply your Career
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
              <span className="text-white">Career</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </section>

      {/* ================= MAIN CONTENT + OPENINGS + APPLICATION FORM ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Fun at Work */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              ref={funWorkImageRef}
              className={`order-2 md:order-1 relative transition-all duration-1000 ${
                funWorkImageVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "-translate-x-16 opacity-0 scale-95"
              }`}
            >
              <img
                src={FunWorkImg}
                alt="Fun at work"
                className="rounded-3xl shadow-xl w-full"
                loading="lazy"
              />
              <div className="absolute inset-6 rounded-2xl border border-white/60 pointer-events-none" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-3">
                Fun <span className="text-red-600">at Work ?</span>
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-pink-600 rounded-full" />
                <span className="w-2 h-2 bg-pink-600 rounded-full" />
                <span className="w-10 h-0.5 bg-gray-300" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Welcome to Auro Tech solutions, and thank you for your interest
                in the exciting careers we offer. Our work is cutting edge
                technology and it seeks talent that is smart, committed, and
                eager to grow.
              </p>
              <h4 className="text-lg font-semibold mb-3">
                Equal Opportunity to All :
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Auro Tech solutions gives equal opportunity and does not
                discriminate on any basis. We are a global professional services
                firm committed to enabling leaders.
              </p>
            </div>
          </div>

          {/* Why Work with Us */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Why <span className="text-red-600">Work</span> with us ?
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-pink-600 rounded-full" />
                <span className="w-2 h-2 bg-pink-600 rounded-full" />
                <span className="w-10 h-0.5 bg-gray-300" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                We welcome talent from diverse educational and professional
                backgrounds. Wherever you are in your career journey, we have
                many opportunities for you.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Compensation",
                  "Recognition",
                  "Vision Benefits",
                  "Knowledge Growth",
                  "Time off",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-gray-700 text-white text-xs flex items-center justify-center">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              ref={whyWorkImageRef}
              className={`relative transition-all duration-1000 ${
                whyWorkImageVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-16 opacity-0 scale-95"
              }`}
            >
              <img
                src={GrowthImg}
                alt="Career growth"
                className="rounded-3xl shadow-xl w-full"
                loading="lazy"
              />
              <div className="absolute inset-6 rounded-2xl border border-white/60 pointer-events-none" />
            </div>
          </div>

          {/* ================= MAKE AN IMPACT CTA ================= */}
          <section className="relative overflow-hidden h-[220px] md:h-[280px]">
            {/* Background with bg-fixed for perfect smooth parallax (no JS lag/jank) */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${careerParallaxBg})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#6A1B9A]/70" />
            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
              <h3 className="text-white text-2xl md:text-4xl font-extrabold">
                Make an Impact with us
              </h3>
              <button
                className="mt-6 inline-flex items-center justify-center rounded-full px-10 py-3
                  bg-black/70 text-white font-extrabold text-lg md:text-2xl
                  shadow-[0_18px_55px_rgba(0,0,0,0.35)]
                  transition hover:scale-[1.02] active:scale-[0.98]"
                type="button"
              >
                Meet our Team <span className="ml-2">›</span>
              </button>
            </div>
          </section>

          {/* ================= CURRENT OPENINGS ACCORDION ================= */}
          <div id="apply" className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111]">
              Current Openings & Career Details
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-black/20" />
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
              </div>
              <span className="w-16 h-px bg-black/20" />
            </div>

            <div className="mt-12 border border-gray-200 rounded-md overflow-hidden">
              {jobs.map((job) => {
                const open = openId === job.id;
                return (
                  <div
                    key={job.id}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 bg-white hover:bg-gray-50 transition"
                      onClick={() => setOpenId(open ? null : job.id)}
                    >
                      <div className="text-left font-semibold text-[#111] text-base md:text-lg">
                        {job.indexLabel} {job.titleShort}
                      </div>
                      <PlusIcon open={open} />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 md:px-6 py-6 bg-white">
                          <h3 className="text-xl md:text-2xl font-extrabold text-[#111]">
                            {job.heading}
                          </h3>
                          <div className="mt-5 space-y-2 text-gray-700">
                            {job.meta.map(([k, v]) => (
                              <p key={k} className="text-sm md:text-[15px]">
                                <span className="text-gray-500">{k} :</span>{" "}
                                <span className="text-gray-800">{v}</span>
                              </p>
                            ))}
                          </div>
                          <h4 className="mt-8 text-lg md:text-xl font-extrabold text-[#111]">
                            {job.descriptionTitle}
                          </h4>
                          <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-[15px]">
                            {job.description}
                          </p>
                          <h4 className="mt-8 text-lg md:text-xl font-extrabold text-[#111]">
                            {job.responsibilitiesTitle}
                          </h4>
                          <ul className="mt-3 space-y-3">
                            {job.responsibilities.map((t, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-gray-600 text-sm md:text-[15px]"
                              >
                                <span className="text-green-600 font-black">
                                  »
                                </span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                          <h4 className="mt-8 text-lg md:text-xl font-extrabold text-[#111]">
                            {job.requirementsTitle}
                          </h4>
                          <ul className="mt-3 space-y-3">
                            {job.requirements.map((t, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-gray-600 text-sm md:text-[15px]"
                              >
                                <span className="text-green-600 font-black">
                                  »
                                </span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-10 text-[#111] font-semibold">
                            Those who are Interesting and Acceptance with our
                            terms,{" "}
                            <button
                              onClick={handleApplyNow}
                              className="text-[#2A2AFF] font-extrabold hover:underline bg-transparent border-none cursor-pointer"
                            >
                              Apply Now.
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= APPLICATION FORM ================= */}
          {showApplicationForm && (
            <div
              id="application-form"
              className="bg-gray-50 rounded-2xl shadow-2xl overflow-hidden -mx-6 md:mx-0"
            >
              <div className="bg-linear-to-r from-pink-600 via-purple-600 to-violet-600 text-center py-12 px-6">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
                  Let’s Apply for your Role !
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-10 h-px bg-white/40" />
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span className="w-10 h-px bg-white/40" />
                </div>
                <p className="text-white/90 text-sm md:text-base">
                  Select your Role & Apply with your Correct Details, be happy
                  to join with us !
                </p>
              </div>

              <div className="bg-white px-8 py-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-8 text-center">
                  Apply for Your Right Career Here
                </h3>

                {submitMessage && (
                  <div
                    className={`mb-6 p-4 rounded-md text-center ${
                      submitStatus === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="max-w-4xl mx-auto space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                        required
                      />
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Your Mobile No"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select Position</option>
                      <option value="Mobile Application Developer">
                        Mobile Application Developer
                      </option>
                      <option value="Back-End Developer">
                        Back-End Developer
                      </option>
                      <option value="Front-End Developer">
                        Front-End Developer
                      </option>
                    </select>
                  </div>

                  <textarea
                    name="about"
                    placeholder="About you"
                    rows="5"
                    value={formData.about}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold shadow-lg transition-all ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-linear-to-r from-pink-600 via-purple-600 to-violet-600 hover:opacity-90"
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}{" "}
                      <span className="text-lg">➜</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Bottom contact */}
          <div className="text-center">
            <p className="text-gray-600">
              If you do not find the answer to your question listed, you can
              always contact us directly at
            </p>
            <a
              className="mt-4 inline-block text-3xl md:text-5xl font-extrabold text-[#2A2AFF] hover:underline wrap-break-word"
              href="mailto:AuroTechsolutions.inc@gmail.com"
            >
              AuroTechsolutions.inc@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
