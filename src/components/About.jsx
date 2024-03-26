import pdf from "../assets/RESUME.pdf"
import "../styles/about.css"

function About(){

    return(
        <section id="About">
            <center>
                <h1 className="text-2xl font-bold">About Me</h1>
            </center>

            
            <section className="section" >
            <div>
                <h1 className="h1">Hi there I&apos; m Arshik</h1>
                <br />
                <p>And I love to create beautiful and efficient websites for my customers. 
                    I love going through the entire process with the customer from concept, 
                    to design and then development and launch
                </p>
            </div>

            <div id="edu">
                <div>
                    <p className="topic">2021 - 2025</p>
            
                    <h1 className="h1">B.E Computer Science and Enginerring</h1>
                    <p>CGPA : 8.47</p>
                </div>

                <div>
                    <p className="topic">2020 - 2021</p>
            
                    <h1 className="h1">HSC</h1>
                    <p>Percentage : 92.6</p>
                </div>

                <div>
                    <p className="topic">2018 - 2019</p>
            
                    <h1 className="h1">SSLC</h1>
                    <p>Percentage : 93</p>
                </div>
            </div>
            </section>

            <div className="aboutLink">
                <button><a href="http://www.linkedin.com/in/arshik-s" target="_blank">LinkedIn</a></button>
                <button><a href="https://github.com/ArshikAk" target="_blank">Github</a></button>
                <button><a href={pdf} download="Resume.pdf">Resume</a></button>
            </div>
        </section>
    )
}

export default About