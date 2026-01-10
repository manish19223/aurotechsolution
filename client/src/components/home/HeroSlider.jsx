import { useEffect, useState } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";


const slides = [
  {
    image: `${banner1}`,
    tag: "Hello",
    title: "Upgrade Your Business With Our Technology",
    description:
      "We are Team of Energetic Developers to Making the Technology Futures with You",
  },
  {
    image: `${banner2}`,
    tag: "Hey, There",
    title: "We Give Wings To Your Business",
    description: "Take your Business Online with Safe.",
  },
  {
    image: `${banner3}`,
    tag: "You Know?",
    title: "We Are Your Digital Partner",
    description: "Make as a Business Technology Partner.",
  },
  {
    image: `${banner4}`,
    tag: "It's Really!",
    title: "We Make Your Brand Shine",
    description: "Take upto your Business Online & Be Bright your Life.",
  },
  {
    image: `${banner1}`,
    tag: "Hello",
    title: "Upgrade Your Business With Our Technology",
    description:
      "We are Team of Energetic Developers to Making the Technology Futures with You",
  },
  {
    image: `${banner2}`,
    tag: "Hey, There",
    title: "We Give Wings To Your Business",
    description: "Take your Business Online with Safe.",
  },
  {
    image: `${banner3}`,
    tag: "You Know?",
    title: "We Are Your Digital Partner",
    description: "Make as a Business Technology Partner.",
  },
  {
    image: `${banner4}`,
    tag: "It's Really!",
    title: "We Make Your Brand Shine",
    description: "Take upto your Business Online & Be Bright your Life.",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative h-screen w-full overflow-hidden pt-25">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-600/40" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-6xl font-bold leading-none">“</span>
            <span className="text-lg opacity-90">{slide.tag}</span>
          </div>

          {/* Title */}
          <h1
            className="font-heading font-bold leading-tight
            text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg max-w-xl opacity-90">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full">
              View More
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              active === i ? "bg-pink-600 scale-125" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
