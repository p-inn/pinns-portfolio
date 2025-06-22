import './globals.css'

export const metadata = {
  title: 'Pinn Portfolio',
  description: '프론트엔드 개발자 이솔의 포트폴리오입니다.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='font-pretendard w-full'>{children}</body>
    </html>
  );
}
