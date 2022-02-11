import React from 'react';


const PASSgen = () => {
    return(
        <div classname="PASSgen">
            <video width="640" height="480" controls><source src=".\assets\videos\HTML Generator.webm" type="video/webm"></source></video>
            <div classname="content">
                <h1>Password Generator</h1>
                <p >Following a YouTube tutorial, I was able to create a code that generates a random password, made up of random components based on user input</p>
            </div>
        </div>
    )
}

export default PASSgen;