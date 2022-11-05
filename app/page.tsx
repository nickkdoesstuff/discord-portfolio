"use client"

import "../styles/globals.css"
import Image from 'next/image'
import Link from 'next/link'
import SpotifyActivity from "../components/Spotify"
import Profile from "../components/Profile"
import { useState, useEffect } from 'react'

export default function HomePage(){

    const [name, setName] = useState("")
    const [tag, setTag] = useState("")
    const [status, setStatus] = useState("")
    const [statusText, setStatusText] = useState("")
    const [avatar, setAvatar] = useState("")


    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [album, setAlbum] = useState("")
    const [cover, setCover] = useState("")
    const [id, setId] = useState("")
    const [spot, setSpot] = useState(true)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

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


        setTimeout(async () => {
            setLoading(true)
            await setSpotifyStats()
            const fetched = await fetch("https://api.lanyard.rest/v1/users/265781702306037762", { next: { revalidate: 120 } })
            const data = await fetched.json()

            let parsedStatusText = ""
            let findText = data.data.activities.find((x: { name: any }) => x.name == "Custom Status")

            if(findText) {
                parsedStatusText = findText.state 
            } else {
                parsedStatusText = "No status set"
            }

            setName(data.data.discord_user.username)
            setTag(data.data.discord_user.discriminator)
            setAvatar(`https://cdn.discordapp.com/avatars/265781702306037762/${data.data.discord_user.avatar}`)
            setStatus(data.data.discord_status)
            setStatusText(parsedStatusText)
            setLoading(false)

        }, 1)

        setInterval(async () => {
        
            await setSpotifyStats()

        }, 10000)
    }, [])

    return (
        <div>
            { loading ? <p>Loading, we'll just be a few moments...</p> :  <Profile name={name} tag={tag} status={status} statusText={statusText} avatar={avatar} />}
            { spot ? <SpotifyActivity title={title} artist={artist} album={album} cover={cover} id={id} /> : null }
        </div>
    )
}