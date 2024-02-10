import { Inter, Gruppo } from "next/font/google";
import "./globals.css"; 
import Image from "next/image"
import NavBar from "./components/navbar/page"

const Gruppo_init = Gruppo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-Gruppo',
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={Gruppo_init.className}>
          < NavBar />
          {children}
          

        </body>
    </html>
  )
}



