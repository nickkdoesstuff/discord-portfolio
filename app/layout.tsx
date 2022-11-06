/* eslint-disable @next/next/no-head-element */
'use client'
import Link from 'next/link'
import Profile from '../components/Profile';
import SpotifyActivity from '../components/Spotify';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="bg-zinc-900 flex flex-col gap-2 items-center justify-center h-[100vh] text-white">
        <div className="bg-zinc-800 p-2 rounded-lg border-solid border-2 border-zinc-700">
          <div className="flex gap-3">
            <Link className="material-symbols-rounded" href="/">home</Link>
            <Link className="material-symbols-rounded" href="/talk">label</Link>
            <Link className="material-symbols-rounded" href="/project">language</Link>
          </div>
        </div>
        <div className="bg-zinc-800 p-2 rounded-lg border-solid border-2 border-zinc-700">
          <Profile />
          <div className="text-center p-3">
            {children}
          </div>
          <SpotifyActivity />
        </div>
        </body>
    </html>
  );
}
