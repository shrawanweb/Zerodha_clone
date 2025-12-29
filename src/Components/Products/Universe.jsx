function Universe() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">

        <p className="text-center text-2xl text-gray-500">
          Want to know more about our technology stack? Check out the Zerodha.tech blog.
        </p>

        <div className="max-w-3xl mx-auto mt-15 space-y-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            The Zerodha Universe
          </h1>

          <p className="text-gray-600 leading-relaxed mt-2">
            Extend your trading and investment experience even further with our partner platforms
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-14 text-center">

          <div>
            <a href="#">
              <img
                src="src/assets/zerodhaFundhouse.png"
                alt="Zerodha Fund House"
                className="mx-auto h-16 object-contain"
              />
            </a>
            <p className="text-gray-600 mt-3">
              Our asset management venture offering<br />
              direct mutual funds at zero commission.
            </p>
          </div>

          <div>
            <a href="#">
              <img
                src="src/assets/sensibullLogo.svg"
                alt="Sensibull"
                className="mx-auto h-16 object-contain"
              />
            </a>
            <p className="text-gray-600 mt-3">
              Options trading platform for<br />
              strategies & market insights.
            </p>
          </div>

          <div>
            <a href="#">
              <img
                src="src/assets/tijori.svg"
                alt="Tijori"
                className="mx-auto h-16 object-contain"
              />
            </a>
            <p className="text-gray-600 mt-3">
              Investment research with deep insights<br />
              into stocks, sectors & supply chains.
            </p>
          </div>


          <div>
            <a href="#">
              <img
                src="src/assets/streakLogo.png"
                alt="Streak"
                className="mx-auto h-16 object-contain"
              />
            </a>
            <p className="text-gray-600 mt-3">
              Create & backtest trading strategies<br />
              without coding.
            </p>
          </div>

          <div>
            <a href="#">
              <img
                src="src/assets/smallcaseLogo.png"
                alt="smallcase"
                className="mx-auto h-16 object-contain"
              />
            </a>
            <p className="text-gray-600 mt-3">
              Invest in diversified, expert-curated<br />
              baskets of stocks.
            </p>
          </div>

          <div>
            <a href="#">
              <img
                src="src/assets/dittoLogo.png"
                alt="Ditto"
                className="mx-auto h-16 object-contain"
              />
            </a>
            <p className="text-gray-600 mt-3">
              Personalized insurance advice with<br />
              no spam & no mis-selling.
            </p>
          </div>

        </div>
        <a
            href="#"
            className="inline-block mt-15 px-4 py-2 bg-blue-500 text-white rounded hover:bg-[#222] transition-colors"
          >
            Sign up for free
          </a>
      </div>
    </>
  );
}

export default Universe;
