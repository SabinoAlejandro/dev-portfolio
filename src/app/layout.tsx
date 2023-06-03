import './globals.css';

export const metadata = {
  title: 'Sabino Portfolio',
  description: 'Website to introduce myself as a developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-light-blue-500 leading-relaxed text-dark-navy-blue-500 antialiased selection:bg-dark-blue-500 selection:text-white'>
        {children}
      </body>
    </html>
  );
}
