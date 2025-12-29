function Hero() {
  return (
    <>
      <div className="bg-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          <div>
            <h2 className="text-lg mb-6">Support Portal</h2>

            <h1 className="text-2xl font-medium leading-snug mb-8">
              Search for an answer or browse help topics <br /> to create a ticket
            </h1>
            <div className="search-box mb-6">
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
                className="w-full bg-white text-black rounded-md px-4 py-3 placeholder-gray-500"
              />
            </div>

            <div className="quick-links flex flex-wrap gap-4 underline">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>


          <div className="">
            <a href="#" className="underline block mb-8 text-lg text-left md:text-right">
              Track Tickets
            </a>

            <div className="flex lg:flex-row-reverse">
            <div>
              <h2 className="text-xl font-semibold mb-4">Featured</h2>
            <ol className="list-decimal ml-6 md:ml-0 md:inline-block space-y-3">
              <li>
                <a href="#" className="underline">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Latest Intraday leverages – MIS & CO
                </a>
              </li>
            </ol>
            </div>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
