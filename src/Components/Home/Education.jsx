import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Education() {
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-9">
          <div>
            <img
              src="src/assets/education.svg"
              alt="educational image"
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mx-auto"
            />
          </div>

          <div className="mt-6 space-y-7">
            <h1 className="text-4xl font-semibold">
              Free and open market education
            </h1>
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center gap-1"
              >
                Varsity <ArrowForwardIcon fontSize="small" />
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center gap-1"
              >
                TradingQ&A <ArrowForwardIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
