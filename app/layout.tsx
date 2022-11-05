/* eslint-disable @next/next/no-head-element */
import Link from 'next/link'

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
            <a className="material-symbols-rounded cursor-pointer" href="/">home</a>
            <a className="material-symbols-rounded cursor-pointer" href="/talk">label</a>
            <a className="material-symbols-rounded cursor-pointer" href="/project">language</a>
          </div>
        </div>
        <div className="bg-zinc-800 p-2 rounded-lg border-solid border-2 border-zinc-700">
          {children}
        </div>
        </body>
    </html>
  );
}
