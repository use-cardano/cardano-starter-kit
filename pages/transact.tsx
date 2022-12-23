import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="text-center my-2">
      <h1 style={inter.style} className="uppercase text-4xl">transact</h1>
    </div>
  )
}
