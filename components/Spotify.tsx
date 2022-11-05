import Image from 'next/image'
import Link from 'next/link'

export default function SpotifyActivity({ title, artist, album, cover, id }: any) {
    return (
        <div className="mt-3 border-t-2 border-zinc-700">
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