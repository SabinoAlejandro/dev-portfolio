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
      <body className='bg-slate-900 leading-relaxed text-white antialiased selection:bg-cyan-700 selection:text-slate-300'>
        {children}
      </body>
    </html>
  );
}
