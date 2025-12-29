import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="lg:grid md:grid grid-cols-5 gap-8 sm:space-y-8">
          {/* LEFT SECTION */}
          <div className="text-gray-700">
            <img
              src="src/assets/logo.svg"
              alt=""
              className="h-3 md:h-4 lg:h-5"
            />
            <p>&copy; 2010 - 2025, Zerodha Broking Ltd.</p> 
            <p>All rights reserved.</p>

            <div className="flex space-x-4 mt-4">
              <XIcon className="cursor-pointer hover:text-blue-600" />
              <FacebookIcon className="cursor-pointer hover:text-blue-600" />
              <InstagramIcon className="cursor-pointer hover:text-blue-600" />
              <LinkedInIcon className="cursor-pointer hover:text-blue-600" />
            </div>
          </div>

          <div className="text-gray-700">
            <h3 className="text-xl font-semibold">Account</h3>
            <div className="space-y-3 mt-3">
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Open demat account
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Minor demat account
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                NRI demat account
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Commodity
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Dematerialisation
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Fund transfer
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                MTF
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Referral program
              </a>
            </div>
          </div>

          {/* SUPPORT SECTION */}
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold">Support</h3>
            <div className="space-y-3 mt-3">
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Contact us
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Support portal
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                How to file a complaint?
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Status of your complaints
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Bulletin
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Circular
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Z-Connect blog
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Downloads
              </a>
            </div>
          </div>

          {/* COMPANY SECTION */}
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold">Company</h3>
            <div className="space-y-3 mt-3">
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                About
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Philosophy
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Press & media
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Careers
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Zerodha Cares (CSR)
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Zerodha.tech
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Open source
              </a>
            </div>
          </div>

          {/* QUICK LINKS SECTION */}
          <div className="text-gray-700">
            <h3 className="text-xl font-semibold">Quick links</h3>
            <div className="space-y-3 mt-3">
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Upcoming IPOs
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Brokerage charges
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Market holidays
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Economic calendar
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Calculators
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Markets
              </a>
              <a href="#" className="block hover:text-blue-300 cursor-pointer">
                Sectors
              </a>
            </div>
          </div>
        </div>
        <div className="text-[10px] leading-relaxed text-slate-500 space-y-4">
          <p>
            Zerodha Broking Ltd. is a member of NSE, BSE &amp; MCX. SEBI
            registered stock broker and depository participant (CDSL/NSDL). For
            complaints related to securities broking write to{" "}
            <a href="mailto:complaints@zerodha.com" className="text-blue-500">
              complaints@zerodha.com
            </a>{" "}
            and for DP related issues write to{" "}
            <a href="mailto:dp@zerodha.com" className="text-blue-500">
              dp@zerodha.com
            </a>
            . Please ensure you read the Risk Disclosure Document as prescribed
            by SEBI / Exchanges / Depositories.
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <span className="font-medium">SEBI SCORES</span>: register on the
            SCORES portal and provide mandatory details like name, PAN, address,
            mobile number and e-mail ID. Benefits: faster communication and
            time-bound redressal of grievances.
          </p>

          <p>
            <a href="#" className="text-blue-500">
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-500">
              Grievance Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities markets are subject to market risks.
            Kindly read all related documents carefully before investing or
            trading.
          </p>

          <p>
            Attention investors: (1) Securities can be accepted as margin only
            by way of pledge in the depository system. (2) Update your e-mail ID
            and mobile number with your broker / depository participant to
            receive OTPs and alerts directly from the exchange / depository. (3)
            Check your securities / MF / bonds in the consolidated account
            statement issued by the depository every month.
          </p>

          <p>
            India&apos;s largest broker based on active client count and
            notional turnover as per publicly available exchange data. For more
            details, refer to the{" "}
            <a href="#" className="text-blue-500">
              NSE broker factsheet
            </a>
            .
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            contact details with your broker and verify trade / account
            statements received from the exchange on your e-mail / mobile. KYC
            is a one-time process when dealing with a SEBI-registered
            intermediary. If you subscribe to an IPO, there is no need to issue
            cheques; payment is made via the banking system. Do not share your
            PIN, password or OTP with anyone. If you suspect fraud, please{" "}
            <a href="#" className="text-blue-500">
              create a ticket here
            </a>
            .
          </p>

          <p className="text-[10px]">
            *Customers availing insurance advisory or related services through
            partners will have access only to those platforms&apos; grievance
            and dispute resolution mechanisms, in addition to SEBI SCORES / ODR
            where applicable.
          </p>

          <div className="flex flex-wrap gap-6 lg:pt-4 text-[13px] lg:px-28 font-medium text-slate-500">
            <a href="#" className="hover:text-blue-500">
              NSE
            </a>
            <a href="#" className="hover:text-blue-500">
              BSE
            </a>
            <a href="#" className="hover:text-blue-500">
              MCX
            </a>
            <a href="#" className="hover:text-blue-500">
              Terms &amp; conditions
            </a>
            <a href="#" className="hover:text-blue-500">
              Policies &amp; procedures
            </a>
            <a href="#" className="hover:text-blue-500">
              Privacy policy
            </a>
            <a href="#" className="hover:text-blue-500">
              Disclosure
            </a>
            <a href="#" className="hover:text-blue-500">
              For investor&apos;s attention
            </a>
            <a href="#" className="hover:text-blue-500">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
