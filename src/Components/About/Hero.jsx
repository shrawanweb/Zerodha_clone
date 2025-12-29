function Hero() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto mt-6 space-y-8">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            We pioneered the discount broking model in India. Now, we are
            breaking ground with our technology.
          </h1>

        </div>
        <hr className="border-gray-300 mt-20" />
        <div className="lg:grid md:grid grid-cols-2 mt-15 gap-10 max-w-4xl mx-auto text-gray-600 leading-relaxed lg:text-lg">
          <div className="max-w-120 space-y-4">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="max-w-120 space-y-4 sm:mt-10 lg:mt-0 md:mt-0 mt-5">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a href="#" className="text-blue-500 hover:text-black">
                Rainmatter,
              </a>{" "}
              our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <a href="#" className="text-blue-500 hover:text-black">
                blog
              </a>{" "}
              or see what the media is{" "}
              <a href="#" className="text-blue-500 hover:text-black">
                saying about us
              </a>{" "}
              or learn more about our business and product{" "}
              <a href="#" className="text-blue-500 hover:text-black">
                philosophies.
              </a>
            </p>
          </div>

        </div>
        <hr className="border-gray-300 mt-20" />
      </div>
    </>
  );
}
export default Hero;
