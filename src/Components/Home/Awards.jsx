function Awards() {
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className=" grid lg:grid-cols-2 gap-20 ">
          <img src="src/assets/largestBroker.svg" alt="Largest Broker" className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mx-auto" />
          <div className="mt-7 max-w-6xl mx-auto">
            <h1 className="text-4xl font-semibold mt-6">
              India's largest broker
            </h1>
            <p className="text-gray-600 leading-relaxed mt-2">
              Over 8 million Zerodha accounts opened since 2010
            </p>
            <div className="lg:grid md:grid grid-cols-2 mt-10 space-y-2">

            <div className="ml-4 space-y-2">
              <li>Futures and Options</li>
              <li>Commoditiy derivatives</li>
              <li>Currency derivatives</li>
            </div>
            <div className="ml-4 space-y-2">
              <li>Stocks and IPOs</li>
              <li>Direct Mutual Funds</li>
              <li>Bonds and Government Securities</li>
            </div>
            </div>
            <img src="src/assets/pressLogos.png" alt="" className="mt-4"/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Awards;
