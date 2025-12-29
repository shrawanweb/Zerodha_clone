import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Hero() {
  return (
    <>
<div className="hero">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">

          <div className="max-w-3xl mx-auto mt-6 space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-slate-600 font-medium">
              Zerodha Products
            </h1>

            <p className="text-gray-600 text-lg mt-2">
              Sleek, modern, and intuitive trading platforms
            </p>
            <p>
                Check out our { "  "}
            <a
              href="#"
              className=" text-blue-400 font-medium "
            >
               investment offerings <ArrowForwardIcon fontSize="small" />
            </a>
            </p>
          </div>

        </div>
      </div>
      </>
    );
}

export default Hero;    