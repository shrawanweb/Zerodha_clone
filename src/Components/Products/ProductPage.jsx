import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Universe from "./Universe";


function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="src/assets/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo={<><span>Try demo</span> <ArrowForwardIcon fontSize="small" /></>}
        learnMore={<><span>Learn more</span> <ArrowForwardIcon fontSize="small" /></>}
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="src/assets/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more"
      />
      <LeftSection
        imageURL="src/assets/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo={<><span>Coin</span> <ArrowForwardIcon fontSize="small" /></>}
        learnMore=""
        googlePlay=""
        appStore=""
      />
     <RightSection
        imageURL="src/assets/console.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="kite connect"
      />  
      <LeftSection
        imageURL="src/assets/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </>
  );
}
export default ProductPage;
