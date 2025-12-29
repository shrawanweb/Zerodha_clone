function Brokerage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t-gray-500 border-t">
        <div className="lg:col-span-2">
          <a href="#"><h1 className="text-xl text-blue-400 text-center mb-5">Brokerage calculator</h1></a>

          <ul className="list-disc ml-5 space-y-3 ">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>

            <li>Digital contract notes will be sent via e-mail.</li>

            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>

            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>

            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div>
          <a href="#"><h1 className="text-xl text-blue-400 text-center">List of Charges</h1></a>
        </div>

      </div>
    </>
  );
}

export default Brokerage;
