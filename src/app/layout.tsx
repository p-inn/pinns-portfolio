import './globals.css'

export const metadata = {
  title: 'Pinn Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='font-pretendard w-full bg-white'>{children}</body>
    </html>
  );
}
