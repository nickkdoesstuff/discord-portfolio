/* eslint-disable @next/next/no-head-element */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="bg-zinc-900 grid place-items-center h-[100vh] text-white">
        <div className="bg-zinc-800 p-2 rounded-lg border-solid border-2 border-zinc-700">
          {children}
        </div>
        </body>
    </html>
  );
}
