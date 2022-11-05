import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Profile() {

    const [name, setName] = useState("")
    const [tag, setTag] = useState("")
    const [status, setStatus] = useState("")
    const [statusText, setStatusText] = useState("")
    const [avatar, setAvatar] = useState("")
    
    useEffect(() => {
        setTimeout(async () => {
            const fetched = await fetch("https://api.lanyard.rest/v1/users/265781702306037762", { next: { revalidate: 120 } })
            const data = await fetched.json()

            let parsedStatusText = ""
            let findText = data.data.activities.find((x: { name: any }) => x.name == "Custom Status")

            if(findText) {
                parsedStatusText = findText.state 
            } else {
                parsedStatusText = ""
            }

            setName(data.data.discord_user.username)
            setTag(data.data.discord_user.discriminator)
            setAvatar(`https://cdn.discordapp.com/avatars/265781702306037762/${data.data.discord_user.avatar}`)
            setStatus(data.data.discord_status)
            setStatusText(parsedStatusText)

        }, 1)

    }, [])

    let ringCol = ""
    if (status == "dnd") { ringCol = "border-red-500" } else if (status == "online") { ringCol = "border-green-500" } else if (status== "idle") { ringCol = "border-yellow-500" } else { ringCol == "border-gray-500" }


    return (
        <div>
            <div className="p-2 border-b-2 border-zinc-700">
                <div className='flex mb-1'>
                    <Image src={avatar} className={`rounded-full border-2 ${ringCol} p-1`} width="75" height="75" alt="user logo"></Image>
                    <div className="flex flex-col m-auto ml-4">
                        <p className="font-bold text-2xl mb-1">{name || "loading"}<span className="text-gray-500">#{tag || "0000"}</span></p>
                        <p>{statusText || ""}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}