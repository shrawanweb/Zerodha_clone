function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-center text-3xl mb-10 -mt-15">People</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto text-gray-600 leading-relaxed lg:text-lg">
        
        <div className="flex flex-col items-center text-center">
          <img
            src="src/assets/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="w-56 h-56 object-cover rounded-full mb-6"
          />
          <h3 className="text-xl font-semibold text-gray-900">
            Nithin Kamath
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Founder, CEO
          </p>
        </div>

        <div className="space-y-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>
            Playing basketball is his zen.
          </p>

          <p>
            Connect on{" "}
            <span className="text-blue-600 cursor-pointer">Homepage</span> /{" "}
            <span className="text-blue-600 cursor-pointer">TradingQnA</span> /{" "}
            <span className="text-blue-600 cursor-pointer">Twitter</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;
