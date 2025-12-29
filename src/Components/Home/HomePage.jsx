import OpenAccount from "../OpenAccount";
import Education from "./Education";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";

function HomePage(){
    return(
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    )
}
export default  HomePage;