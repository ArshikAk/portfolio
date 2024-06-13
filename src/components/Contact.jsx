import "../styles/contact.css"

function Contact(){

    return(
        <section id="Contacts" className="contacts">
            
            <h1 style={{fontSize : "xx-large",margin :"10px 0px 20px 0px"}}>Contact</h1>

            <div className="personInfo">
                <h1 style={{fontSize : "xx-large",margin :"10px 0px 20px 0px"}}>Personal Details :</h1>
                <p><b>Email :</b> arshik0404@gmail.com</p>
                <p><b>Phone No :</b> 8248436235</p>
            </div>

            <form>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Your Name" required/>

                <br />

                <label htmlFor="">Email Id</label>
                <input type="text" placeholder="Enter your Email Id" required />

                <br />

                <label htmlFor="">Message</label>
                <textarea rows="6" placeholder="Enter your Comments" required ></textarea>

                <br />

                <input type="submit" value="Submit" id="submit"/>
            </form>

        </section>
    )
}

export default Contact