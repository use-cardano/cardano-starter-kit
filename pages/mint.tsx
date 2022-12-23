import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="text-center my-4 max-w-4xl m-auto">
      <h1 style={inter.style} className="uppercase text-4xl  my-8">
        Minting
      </h1>
    </div>
  )
}
