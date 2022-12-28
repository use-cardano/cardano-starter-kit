import { CommandLineIcon } from "components/icons/CommandLineIcon"

import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="text-center max-w-4xl m-auto text-gray-900 dark:text-gray-100">
      <h1
        style={inter.style}
        className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
      >
        Cardano Starter Kit
      </h1>

      <p
        style={inter.style}
        className="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Build Web3 applications on Cardano
      </p>

      <div style={inter.style} className="my-4 text-left ">
        This is a starter kit for building cardano web3 applications. It uses{" "}
        <a
          className="underline underline-offset-2"
          href="https://use-cardano.alangaming.com"
          rel="noreferrer"
          target="_blank"
        >
          use-cardano
        </a>{" "}
        which is a React hook, context, and set of components for interacting with the Cardano
        blockchain, which is built on top of{" "}
        <a
          className="underline underline-offset-2"
          href="https://lucid.spacebudz.io/"
          rel="noreferrer"
          target="_blank"
        >
          Lucid
        </a>{" "}
        and provides a simple API for interacting with the Cardano blockchain.
      </div>

      <div style={inter.style} className="my-4 text-left">
        The aim of this project is to serve as a simple starting point, but also to help developers
        get into Cardano dApp development. With that said, this tech stack provides all
        functionality needed for writing off chain code for dApps and should scale with your needs.
      </div>

      <div style={inter.style} className="my-4 text-left">
        <span className="italic text-gray-500">
          In an upcoming version of this boilerplate, we aim to include a DSL (Domain Specific
          Language) for the on-chain components of Cardano dApp development. We are still deciding
          on which language to use, but we are considering either{" "}
          <a
            className="underline underline-offset-2"
            href="https://www.hyperion-bt.org/Helios-Book/intro.html"
            rel="noreferrer"
            target="_blank"
          >
            Helios
          </a>
          ,{" "}
          <a
            className="underline underline-offset-2"
            href="https://aiken-lang.github.io/aiken/"
            rel="noreferrer"
            target="_blank"
          >
            Aiken
          </a>
          , or{" "}
          <a
            className="underline underline-offset-2"
            href="https://www.harmoniclabs.tech/plu-ts-docs/index.html"
            rel="noreferrer"
            target="_blank"
          >
            plu-ts
          </a>
          .
        </span>
      </div>

      <div style={inter.style} className="my-4 text-left">
        The starter project is built on top of Next.js, which is a React framework for building
        static and dynamic websites. It is a great choice for building dApps, as it is easy to use,
        and provides a lot of functionality out of the box. It also has a great developer
        experience, which makes it easy to get started.
      </div>

      <div style={inter.style} className="my-4 text-left">
        For styling, we are using Tailwind CSS, which is a utility-first CSS framework with a good
        balance of flexibility, composability, and ease of use. It is also very easy to use with
        Next.js, and provides a lot of functionality out of the box.
      </div>

      <div style={inter.style} className="mt-12 mb-4">
        <a
          className="underline underline-offset-4"
          href="https://github.com/use-cardano/cardano-starter-kit/generate"
          rel="noreferrer"
          target="_blank"
        >
          <CommandLineIcon className="inline mr-1" />
          Fork the repository to use the template
        </a>
      </div>
    </div>
  )
}
