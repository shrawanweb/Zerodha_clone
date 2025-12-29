import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function CreateTiket() {
  return (
    <>
      <section className="bg-white text-gray-800">

        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-xl font-medium">To Create a tiket , select relevant topic</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 mt-5">
            <div>
              <h3 className="flex items-center text-lg font-medium mb-6">
                <PersonAddOutlinedIcon className="text-gray-600 mr-3" />
                Account Opening
              </h3>

              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Online Account Opening
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Offline Account Opening
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Company, Partnership and HUF Account Opening
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    NRI Account Opening
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Charges at Zerodha
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Zerodha IDFC FIRST Bank 3-in-1 Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Getting Started
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-medium mb-6 text-gray-900">
                <AccountCircleOutlinedIcon className="text-gray-600 mr-3" />
                Your Zerodha Account
              </h3>

              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Login Credentials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Account Modification and Segment Addition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    DP ID and bank details
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Your Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Transfer and conversion of shares
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-medium mb-6 text-gray-900">
                <InsightsOutlinedIcon className="text-gray-600 mr-3" />
                Your Zerodha Account
              </h3>

              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Margin/leverage, Product and Order types
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Kite Web and Mobile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Trading FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Corporate Actions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Sentinel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Kite API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Pi and other platforms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Stockreports+
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    GTT
                  </a>
                </li>
              </ul>
            </div>

            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="flex items-center text-base font-medium mb-5 text-gray-900">
                <AccountBalanceWalletOutlinedIcon className="text-gray-600 mr-3" />
                Funds
              </h4>

              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Adding Funds
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Fund Withdrawal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    eMandates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Adding Bank Accounts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="flex items-center text-base font-medium mb-5 text-gray-900">
                <DashboardOutlinedIcon className="text-gray-600 mr-3" />
                Console
              </h4>

              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Ledger
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    60 Day Challenge
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="flex items-center text-base font-medium mb-5 text-gray-900">
                <MonetizationOnOutlinedIcon className="text-gray-600 mr-3" />
                Coin
              </h4>

              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Understanding Mutual Funds
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    About Coin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Buying and Selling through Coin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Starting an SIP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CreateTiket;
