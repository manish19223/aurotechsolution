import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaServer, FaBullhorn, FaLaptopCode, FaDesktop } from "react-icons/fa";

const cards = [
  {
    icon: <FaLaptopCode />,
    title: "Consistency Develop",
    text: "We are the Consistency Team & Have a Flexible Work for Develop Your Project.",
  },
  {
    icon: <FaDesktop />,
    title: "Efficient Technology",
    text: "We Use Efficient Technology to Fulfill your Requirement & Complete Your Process.",
  },
  {
    icon: <FaServer />,
    title: "Reliable Support",
    text: "We know how our Work Satisfy You, So We give you More Reliable Support.",
  },
  {
    icon: <FaBullhorn />,
    title: "Fast Delivery",
    text: "We Made & Giving to You what You Expect and Submit Your Project at Express Time.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl font-bold">
          Why Choose <span className="text-pink-600">Us ?</span>
        </h2>

        {/* Divider */}
        <div className="flex justify-center items-center gap-2 my-4">
          <span className="w-10 h-px bg-gray-300" />
          <span className="w-2 h-2 bg-pink-600 rounded-full" />
          <span className="w-2 h-2 bg-pink-600 rounded-full" />
          <span className="w-2 h-2 bg-pink-600 rounded-full" />
          <span className="w-10 h-px bg-gray-300" />
        </div>

        <p className="text-gray-600 mb-14">
          We Giving Better Solution on your Business Scope
        </p>

        {/* SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          centeredSlides={true} // Cards center mein nicely align honge jab 3 visible
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Hover par pause (user experience better)
          }}
          grabCursor={true}
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false, // Mobile par full center better nahi, left align
            },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // Large screen par 3 cards visible → sliding mandatory & visible
          }}
          pagination={{
            el: ".why-pagination",
            clickable: true,
          }}
          className="
            [&_.swiper-pagination-bullet]:w-2
            [&_.swiper-pagination-bullet]:h-2
            [&_.swiper-pagination-bullet]:bg-gray-300
            [&_.swiper-pagination-bullet]:opacity-100
            [&_.swiper-pagination-bullet]:transition-all
            [&_.swiper-pagination-bullet]:duration-300
            [&_.swiper-pagination-bullet-active]:w-6
            [&_.swiper-pagination-bullet-active]:rounded-full
            [&_.swiper-pagination-bullet-active]:bg-gradient-to-r
            [&_.swiper-pagination-bullet-active]:from-pink-600
            [&_.swiper-pagination-bullet-active]:to-purple-600
          "
        >
          {cards.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="
                  group
                  h-full
                  border rounded-xl p-8 text-left bg-white
                  transition-all duration-500 ease-out
                  hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600
                  hover:shadow-[0_0_30px_rgba(236,72,153,0.45)]
                "
              >
                <div className="text-pink-600 text-4xl mb-6 transition-colors duration-500 group-hover:text-white">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold mb-3 text-gray-900 transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PAGINATION OUTSIDE */}
        <div className="why-pagination flex justify-center gap-2 mt-10" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
