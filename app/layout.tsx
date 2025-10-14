import "styles/tailwind.css"
import { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "components/ProvidersComponents/ThemeProviders"

const gilroy = localFont({
  src: [
    { path: "../styles/fonts/DMSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../styles/fonts/DMSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../styles/fonts/AltTomato.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Ultra",
  description:
    "Ibrahim Muritala is a multidisciplinary software engineer (frontend heavy) with 5+ years of experience and a degree in physics.",
  icons: {
    icon: [
      {
        url: "/fav.png",
        sizes: "any",
      },
      {
        url: "/fav.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/fav.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/fav.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/fav.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/fav.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        rel: "mask-icon",
        url: "/fav.png",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ibrahim Muritala",
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://ibmuri.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/fav.png",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={gilroy.variable}>
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
