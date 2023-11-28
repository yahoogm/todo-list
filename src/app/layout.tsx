import { Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            className: 'font-semibold text-sm px-4 py-2 shadow-lg mb-20',
          }}
        />
        {children}
      </body>
    </html>
  );
}
