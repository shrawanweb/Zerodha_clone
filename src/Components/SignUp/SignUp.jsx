

function SignUp(){
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 lg:gap-9">
          <div>
            <img
              src="src/assets/signup.png"
              alt="Sign Up Page"
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mx-auto"
            />
          </div>

          <div className="mt-6 space-y-7">
            <h1 className="text-4xl text-slate-600 font-semibold">
             Signup now
            </h1>
              <p className="text-gray-600 leading-relaxed">
               Or track your existing application
              </p>
            </div>
        </div>
        </div>
     </>
  );
}
export default SignUp;
