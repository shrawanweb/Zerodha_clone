function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
          <img
            src="src/assets/homeHero.png"
            alt="Hero"
            className="mx-auto"
          />

          <div className="max-w-3xl mx-auto mt-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Invest in everything
            </h1>

            <p className="text-gray-600 leading-relaxed mt-2">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>

            <a
              href="#"
              className="inline-block mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-[#222] transition-colors"
            >
              Sign up for free
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
