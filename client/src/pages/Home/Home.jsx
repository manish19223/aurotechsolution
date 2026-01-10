// src/pages/Home/Home.jsx
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

/* ================= LAZY LOAD SECTIONS ================= */
const HeroSlider = lazy(() => import("../../components/home/HeroSlider"));
const AboutUs = lazy(() => import("../../components/home/AboutUs"));
const WhoWeAre = lazy(() => import("../../components/home/WhoWeAre"));
const PreciseTechnology = lazy(() =>
  import("../../components/home/PreciseTechnology")
);
const ServicesSlider = lazy(() => import("../../components/home/OurServices"));
const HomeCTA = lazy(() => import("../../components/home/HomeCTA"));
const WhyChooseUs = lazy(() => import("../../components/home/WhyChooseUs"));
const StatsWithVideo = lazy(() =>
  import("../../components/home/StatsWithVideo")
);
const HowWeWork = lazy(() => import("../../components/home/HowWeWork"));
const HowWeWork1 = lazy(() => import("../../components/home/HowWeWork1"));
const Portfolio = lazy(() => import("../../components/home/Portfolio"));
const OurEvents = lazy(() => import("../../components/home/OurEvents"));
const OurClients = lazy(() => import("../../components/home/OurClients"));

/* ================= FALLBACK LOADER ================= */
const SectionLoader = () => (
  <div className="w-full min-h-40 flex items-center justify-center bg-gray-50 rounded-lg">
    <div className="text-center space-y-3">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-gray-500 text-sm">Loading section...</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Auro Tech Solutions | Web & App Development Company</title>
        <meta
          name="description"
          content="Auro Tech Solutions provides professional web development, app development, UI/UX design, and digital solutions to grow your business."
        />
        <meta
          name="keywords"
          content="Web Development, App Development, Auro Tech Solutions, Software Company, IT Services"
        />
        <meta name="author" content="Auro Tech Solutions" />
        <link rel="canonical" href="https://aurotechsolutions.com/" />
      </Helmet>

      {/* ================= HERO ================= */}
      <Suspense fallback={<SectionLoader />}>
        <HeroSlider />
      </Suspense>

      {/* ================= ABOUT ================= */}
      <Suspense fallback={<SectionLoader />}>
        <AboutUs />
      </Suspense>

      {/* ================= WHO WE ARE ================= */}
      <Suspense fallback={<SectionLoader />}>
        <WhoWeAre />
      </Suspense>

      {/* ================= TECHNOLOGY ================= */}
      <Suspense fallback={<SectionLoader />}>
        <PreciseTechnology />
      </Suspense>

      {/* ================= SERVICES ================= */}
      <Suspense fallback={<SectionLoader />}>
        <ServicesSlider />
      </Suspense>
      {/* ================= CTA ================= */}
      <Suspense fallback={<SectionLoader />}>
        <HomeCTA />
      </Suspense>
      {/* ================= WHY CHOOSE US ================= */}
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>
      {/* ================= STATS WITH VIDEO ================= */}
      <Suspense fallback={<SectionLoader />}>
        <StatsWithVideo />
      </Suspense>
      {/*================= How we work =====================*/}
      <Suspense fallback={<SectionLoader />}>
        <HowWeWork />
      </Suspense>
      {/* ================ How we work1 ===================== */}
      <Suspense fallback={<SectionLoader />}>
        <HowWeWork1 />
      </Suspense>
      {/* ============= Portfolio ============= */}
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>
      {/* ============= Our Events ============= */}
      <Suspense fallback={<SectionLoader />}>
        <OurEvents />
      </Suspense>
      {/* ============= Our Clients ============= */}
      <Suspense fallback={<SectionLoader />}>
        <OurClients />
      </Suspense>
    </>
  );
};

export default Home;
