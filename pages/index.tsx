import Head from "next/head"
import { Inter } from "@next/font/google"
import { CardanoWalletSelector } from "use-cardano"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>use-cardano Next.JS starter</title>

        <meta
          name="description"
          content="A boilerplate to get started building web3 dApps on Cardano."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen">
        <nav className="flex h-16items-center justify-between w-full py-2 px-4">
          <div>Logo</div>

          <div className="flex items-center">
            <Link href="/one">
              <button className="h-10 rounded mx-2 px-6 flex items-center bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
                One
              </button>
            </Link>

            <Link href="/one">
              <button className="h-10 rounded mx-2 px-6 flex items-center bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
                Two
              </button>
            </Link>

            <Link href="/one">
              <button className="h-10 rounded mx-2 px-6 flex items-center bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
                Three
              </button>
            </Link>

            <CardanoWalletSelector />
          </div>
        </nav>

        <main>
          <h1>Header</h1>
        </main>
      </main>
    </>
  )
}
