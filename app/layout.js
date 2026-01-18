export const metadata = { title: 'Infinite Pages!' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#f9f9f9' }}>{children}</body>
    </html>
  )
}
