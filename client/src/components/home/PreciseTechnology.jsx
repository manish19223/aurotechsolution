import convenient from "../../assets/images/convenient.png";
import scalable from "../../assets/images/scalable.png";
import efficient from "../../assets/images/efficient.png";
import support from "../../assets/images/support.png";

const PreciseTechnology = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="text-4xl font-bold text-gray-900">
          Precise <span className="text-red-600">Technology</span>
        </h2>

        {/* divider */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="w-10 h-px bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-pink-600"></span>
          <span className="w-2 h-2 rounded-full bg-pink-600"></span>
          <span className="w-2 h-2 rounded-full bg-pink-600"></span>
          <span className="w-10 h-px bg-gray-300"></span>
        </div>

        {/* SUBTEXT */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Started as a team with Ideas and now we Deliver the Amazing Solutions.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mt-20">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img src={convenient} alt="Convenient" className="w-36 h-auto" />
            <h4 className="mt-6 text-xl font-semibold text-gray-900">
              Convenient
            </h4>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img src={scalable} alt="Scalable" className="w-36 h-auto" />
            <h4 className="mt-6 text-xl font-semibold text-gray-900">
              Scalable
            </h4>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img src={efficient} alt="Efficient" className="w-36 h-auto" />
            <h4 className="mt-6 text-xl font-semibold text-gray-900">
              Efficient
            </h4>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <img src={support} alt="Support" className="w-36 h-auto" />
            <h4 className="mt-6 text-xl font-semibold text-gray-900">
              Support
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreciseTechnology;
