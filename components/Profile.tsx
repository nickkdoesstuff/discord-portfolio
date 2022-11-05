import Image from 'next/image'

export default function Profile({ name, tag, status, statusText, activity, avatar }: any) {

    let ringCol = ""
    if (status == "dnd") { ringCol = "border-red-500" } else if (status == "online") { ringCol = "border-green-500" } else if (status== "idle") { ringCol = "border-yellow-500" } else { ringCol == "border-gray-500" }


    return (
        <div>
            <div className="flex p-2 ">
                <Image src={avatar} className={`rounded-full border-2 ${ringCol} p-1`} width="75" height="75" alt="user logo"></Image>
                <div className="flex flex-col m-auto ml-4">
                    <p className="font-bold text-2xl mb-1">{name}<span className="text-gray-500">#{tag}</span></p>
                    <p>{statusText}</p>
                </div>
            </div>
            
        </div>
    )
}