import "../styles/skills.css"
import {html,css,express,flutter,mongodb,js,mysql,node,rc} from "./images"
function Skills(){
    return(
        <section className="skills" id="Skills">
            <center>
                <h1 style={{fontSize : "xx-large"}}>My Skills</h1>
            </center>
            <div className="boxes">
                <div className="box">
                    <img src={html}/>
                    <p>HTML</p>
                </div>
                <div className="box">
                    <img src={css}/>
                    <p>CSS</p>
                </div>
                <div className="box">
                    <img src={js}/>
                    <p>Java Script</p>
                </div>
                <div className="box">
                    <img src={rc}/>
                    <p>React</p>
                </div>
                <div className="box">
                    <img src={node}/>
                    <p>Node</p>
                </div>
                <div className="box">
                    <img src={express}/>
                    <p>Express</p>
                </div>
                <div className="box">
                    <img src={mongodb}/>
                    <p>MongoDB</p>
                </div>
                <div className="box">
                    <img src={mysql}/>
                    <p>MySQL</p>
                </div>
                <div className="box">
                    <img src={flutter}/>
                    <p>Flutter</p>
                </div>
            </div>
        </section>
    )
}

export default Skills