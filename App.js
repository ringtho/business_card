import React from "react"
import Footer from "./components/Footer"


function Info() {
    return (
        <main>
            <div className="info--container">
                <div className="pic">
                    <img src="./images/smith.jpeg"/>
                </div>
                <div className="info">
                    <h1 className="name">Smith Ringtho</h1>
                    <p className="role">Frontend Developer</p>
                    <p className="email">sringtho.com</p>
                    <button>Email</button>
                    <div className="about">
                        <h3>About</h3>
                        <p>I am a frontend developer with a particular interest 
                            in making things simple and automating daily tasks. 
                            I try to keep up with security and best practices, 
                            and am always looking for new things to learn.
                        </p>
                        <h3>Interests</h3>
                        <p>Food expert. Music scholar. Reader. Internet fanatic. 
                            Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. 
                            Coffee fanatic.
                        </p>
                    </div>
                </div>
                <Footer />

            </div>
        </main>
    )
}


function App() {
    return(
        <div className="app--container">
            <Info />

        </div>
    )
}

export default App