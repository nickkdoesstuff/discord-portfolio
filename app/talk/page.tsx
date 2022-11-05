'use client'

import "../../styles/globals.css"

export default function Talk(){
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl">Let's talk.</h1>
            <p>Want to get hold of me? He's the best way to do it: </p>
            <ul>
                <li>DM me on Twitter <a href="https://twitter.com/MrNickKW1" target="_blank" className="underline">@MrNickKW1</a></li>
                <li>Send me a message on Discord <a href="https://discord.gg" target="_blank" className="underline">nickk#4077</a></li>
                <li>Check out my GitHub <a href="https://github.com/nickkdoesstuff" target="_blank" className="underline">@nickkdoesstuff</a></li>
            </ul>
        </div>
    )
}