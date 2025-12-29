function Hero() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className=" text-center">
          <h1 className="text-2xl sm:text-xl md:text-4xl text-slate-500 font-semibold">
            Charges
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            List of all charges and taxes
          </p>
        </div>
        <hr className="mt-15 border-gray-300" />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-12 mt-14 text-center">
          <div>
            <img
              src="src/assets/pricingEquity.svg"
              alt="Zerodha Fund House"
              className="mx-auto max-h-50 object-contain"
            />
            <h1 className="text-2xl sm:text-xl md:text-3xl text-slate-500 font-semibold">
              Free equity delivery
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div>
            <img
              src="src/assets/intradayTrades.svg"
              alt="Zerodha Fund House"
              className="mx-auto max-h-50 object-contain"
            />
            <h1 className="text-2xl sm:text-xl md:text-3xl text-slate-500 font-semibold">
              Intraday and F&O trades
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div>
            <img
              src="src/assets/pricingEquity.svg"
              alt="Zerodha Fund House"
              className="mx-auto max-h-50 object-contain"
            />
            <h1 className="text-2xl sm:text-xl md:text-3xl text-slate-500 font-semibold">
              Free direct MF
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Hero;
