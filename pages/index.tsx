import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="text-center my-4 max-w-4xl m-auto">
      <h1 style={inter.style} className="uppercase text-4xl my-8">
        use-cardano next.js starter
      </h1>

      <div style={inter.style} className="my-4 text-left ">
        This is a starter kit for use-cardano, which is a React hook, context, and set of components
        for interacting with the Cardano blockchain. It is built on top of{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.npmjs.com/lucid-cardano"
          rel="noreferrer"
          target="_blank"
        >
          Lucid
        </a>{" "}
        and provides a simple API for interacting with the Cardano blockchain. It is designed to be
        easy to use, while still providing all the bells and whistles you need to build your dApp.
      </div>

      <div style={inter.style} className="my-4 text-left">
        The aim of use-cardano in general, and the starter kit specifically, is to serve as a simple
        starting point, but also to help developers get into Cardano dApp development. With this in
        mind, the examples are designed to be equally functional and educational.
      </div>
    </div>
  )
}
