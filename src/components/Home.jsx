import Navbar from "./Navbar";
import "../styles/home.css"
import About from "./About"
import Skills from "./Skills"
import AnchorLink from "react-anchor-link-smooth-scroll";
import Contact from "./Contact";

function Home(){
    return(
        <section id="Home">
            <div className="home">
            <Navbar/>
            <div className="content">
            <h1>ARSHIK S</h1>
            <h1>Web Developer</h1>

            <h2>I love to create websites</h2>

            <div className="b">
                <AnchorLink href="#About"><button id="know">Know Me</button></AnchorLink>
                <AnchorLink href="#Contacts"><button id="hire">Hire Me</button></AnchorLink>
            </div>
            </div>
            </div>
            <About/>
            <Skills/>
            <Contact/>
        </section>
    );
}

export default Home