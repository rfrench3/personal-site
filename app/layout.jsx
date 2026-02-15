export const metadata = {
  title: 'Robert French',
  description: 'Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link 
          id="bootstrap-css" 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
        />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
