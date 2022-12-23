import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

const notFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-96px)] transition-all text-blue-400">
      <h1
        style={inter.style}
        className="uppercase text-5xl -mt-20 font-bold tracking-wider rounded-3xl drop-shadow-2xl drop-shadow-blue-400 p-4"
      >
        500 <span className="font-normal">|</span> Internal Server Error
      </h1>
    </div>
  )
}

export default notFoundPage
