import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}){
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-9">
          

          <div className="mt-40 space-y-7">
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
                {learnMore} <ArrowForwardIcon fontSize="small" />
              </a>
            </div>
        </div>
            <div>
            <img
              src={imageURL}
              alt={productName}
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mx-auto"
            />
          </div>
        </div>
        </div>
     </>
  );
}
export default RightSection;
