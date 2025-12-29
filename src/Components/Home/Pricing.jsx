import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Pricing() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT SECTION */}
          <div className="space-y-6 mr-30">
            <h1 className="text-4xl font-semibold">Unbeatable pricing</h1>
            <p className="text-gray-600 leading-relaxed">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>

            <a href="#" className="text-blue-600 font-medium inline-flex items-center gap-1">
              See pricing <ArrowForwardIcon fontSize="small" />
            </a>
          </div>

          {/* RIGHT SECTION */}
          <div>
            <div className="grid grid-cols-2 gap-10">
              
              {/* BLOCK 1 */}
              <div className="border rounded-xl lg:py-12 lg:px-1 py-10 text-center shadow-sm">
                <h2 className="lg:text-5xl text-4xl font-semibold">₹0</h2>
                <p className="text-gray-600 lg:mt-4 mt-2">
                  Free equity delivery and direct mutual funds
                </p>
              </div>

              {/* BLOCK 2 */}
              <div className="border rounded-xl lg:py-14 py-10 text-center shadow-sm">
                <h2 className="lg:text-5xl text-4xl font-semibold">₹20</h2>
                <p className="text-gray-600 lg:mt-4 mt-2">Intraday and F&O</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Pricing;
