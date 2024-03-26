import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from "../assets/AK.jpg"
import "../styles/navbar.css"

function Navbar(){

    return(
        <nav>
            <div className="left">
                <img src={logo} alt="#"/>
                <p>Arshik</p>
            </div>

            <div className="right">
                <AnchorLink className="l" href="#Home">Home</AnchorLink>
                <AnchorLink className="l" href="#About">About</AnchorLink>
                <AnchorLink className="l" href="#Skills">Skills</AnchorLink>
                <AnchorLink className="l" href="#Project">Projects</AnchorLink>
                <AnchorLink className="l" href="#Contacts">Contact</AnchorLink>
            </div>
        </nav>
    )
}

export default Navbar