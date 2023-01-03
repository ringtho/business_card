import React from "react"

function Info() {
    return (
        <main >
            <div className="pic"></div>
            <div className="info">
                <h1 className="name">Smith Ringtho</h1>
                <p className="role">Frontend Developer</p>
                <p className="email">sringtho.com</p>
                <button><i className="fa-solid fa-envelope"></i>Email</button>
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
        </main>
    )
}

export default Info