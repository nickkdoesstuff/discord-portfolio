import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function SpotifyActivity({ }: any) {

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [album, setAlbum] = useState("")
    const [cover, setCover] = useState("")
    const [id, setId] = useState("")
    const [spot, setSpot] = useState(false)

    async function setSpotifyStats() {
        const fetched = await fetch("https://api.lanyard.rest/v1/users/265781702306037762", { cache: 'no-cache' })
        const data = await fetched.json()

        if(data.data.listening_to_spotify == true) {
            const spotData =  data.data.spotify
            setTitle(spotData.song)
            setArtist(spotData.artist)
            setAlbum(spotData.album)
            setCover(spotData.album_art_url)
            setId(spotData.track_id)
            setSpot(true)
        } else {
            setSpot(false)
        }
    }

    useEffect(() => {
        setInterval(async () => {
            await setSpotifyStats()
        }, 10000)
    }, [])

    setTimeout(async () => {
        await setSpotifyStats()
    }, 1)
    
    return (
        <div className={`border-t-2 border-zinc-700 ${spot ? "block" : "hidden"}`}>
            <div className='flex mt-3'>
                <Image src={cover} className="rounded-lg" height="80" width="80" alt="spotify album art"></Image>
                <div className="flex flex-col ml-4 m-auto">
                    <p><span className="font-bold">{title}</span> by <span className="font-bold">{artist}</span></p>
                    <p>From album <span className="font-bold">{album}</span></p>
                    <Link href={`https://open.spotify.com/track/${id}`} target="_blank" className="underline">Listen along on Spotify!</Link>
                </div>
            </div>
        </div>
    )
}