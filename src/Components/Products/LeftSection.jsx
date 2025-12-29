import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}){
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-9">
          <div>
            <img
              src={imageURL}
              alt={productName}
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mx-auto"
            />
          </div>

          <div className="mt-6 space-y-7">
            <h1 className="text-4xl text-slate-600 font-semibold">
             {productName}
            </h1>
              <p className="text-gray-600 leading-relaxed">
               {productDescription}
              </p>
            <div className="space-y-4">
              <a
                href="#"
                className="text-blue-500 font-medium "
              >
                {tryDemo} 
              </a>
              <a
                href="#"
                className="text-blue-500 font-medium ml-4"
              >
                {learnMore} 
              </a>
            </div>
            <div>
                <a href={googlePlay} className="mr-4 inline-block">
                    <img src="src/assets/googleplaybadge.svg" alt="Google Play Store" className="h-12"/>
                </a>
                <a href={appStore} className="inline-block">
                    <img src="src/assets/appstorebadge.svg" alt="Apple App Store" className="h-12"/>
                </a>
            </div>
        </div>
        </div>
        </div>
     </>
  );
}
export default LeftSection;
