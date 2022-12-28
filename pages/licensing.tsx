import { CommandLineIcon } from "components/icons/CommandLineIcon"

import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function About() {
  return (
    <div className="text-center max-w-4xl m-auto text-gray-900 dark:text-gray-100">
      <h1
        style={inter.style}
        className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
      >
        Licensing
      </h1>

      <div style={inter.style} className="mt-12 mb-4"></div>
    </div>
  )
}
