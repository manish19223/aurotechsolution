import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../components/layout/MainLayout";

/* ================= LAZY LOAD PAGES ================= */
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Services = lazy(() => import("../pages/Services/Services"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const Faq = lazy(() => import("../pages/Faq/Faq"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const PrivacyPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy")
);
const Terms = lazy(() => import("../pages/Terms/Terms"));
const Careers = lazy(() => import("../pages/Careers/Careers"));
const HelpCenter = lazy(() => import("../pages/HelpCenter/HelpCenter"));
const CancellationPolicy = lazy(() =>
  import("../pages/CancellationPolicy/CancellationPolicy")
);

/* ================= FALLBACK LOADER ================= */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<PageLoader />}>
              <Portfolio />
            </Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<PageLoader />}>
              <Faq />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />

        {/* Footer pages */}
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <Suspense fallback={<PageLoader />}>
              <Terms />
            </Suspense>
          }
        />
        <Route
          path="/careers"
          element={
            <Suspense fallback={<PageLoader />}>
              <Careers />
            </Suspense>
          }
        />
        <Route
          path="/help-center"
          element={
            <Suspense fallback={<PageLoader />}>
              <HelpCenter />
            </Suspense>
          }
        />
        <Route
          path="/cancellation-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <CancellationPolicy />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
