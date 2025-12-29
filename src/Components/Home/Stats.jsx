import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Trust with confidence
            </h1>
          </div>

          <div>
            <h2 className="text-lg md:text-2xl font-medium">Customer-first always</h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
              investments, making us India’s largest broker; contributing to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-medium">No spam or gimmicks</h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
              that you use at your pace, the way you like.{" "}
              <a href="/" className="text-blue-600 font-medium underline">
                Our philosophies.
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-medium">The Zerodha universe</h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
              you tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-medium">Do better with money</h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">
              With initiatives like{" "}
              <a href="/" className="text-blue-600 font-medium underline">
                Nudge
              </a>{" "}
              and{" "}
              <a href="/" className="text-blue-600 font-medium underline">
                Kill Switch
              </a>
              , we don't just facilitate transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center lg:items-end">
         
          <div className="w-full max-w-md">
            <img
              src="src/assets/ecosystem.png"
              alt="Zerodha ecosystem illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          
          <div className="mt-6 w-full max-w-md sm:max-w-none flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-end">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              Explore our products <ArrowForwardIcon fontSize="small" />
            </a>  

            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              Try Kite demo <ArrowForwardIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
