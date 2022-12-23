import Link from "next/link"
import { CardanoWalletSelector } from "use-cardano"

export const Navigation = () => {
  return (
    <nav className="flex h-24 items-center justify-between w-full py-2">
      <div className="flex items-center">
        <Link href="/">
          <button className="h-10 text-white font-bold tracking-widest uppercase rounded mr-2 px-6 flex items-center bg-blue-300 shadow shadow-blue-100s hover:shadow-none hover:bg-blue-400 transition-all duration-300">
            home
          </button>
        </Link>

        <Link href="/transact">
          <button className="h-10 text-white font-bold tracking-widest uppercase rounded mr-2 px-6 flex items-center bg-blue-300 shadow shadow-blue-100s hover:shadow-none hover:bg-blue-400 transition-all duration-300">
            transact
          </button>
        </Link>

        <Link href="/sign">
          <button className="h-10 text-white font-bold tracking-widest uppercase rounded mx-2 px-6 flex items-center bg-blue-300 shadow shadow-blue-100s hover:shadow-none hover:bg-blue-400 transition-all duration-300">
            Sign
          </button>
        </Link>

        <Link href="/mint">
          <button className="h-10 text-white font-bold tracking-widest uppercase rounded mx-2 px-6 flex items-center bg-blue-300 shadow shadow-blue-100s hover:shadow-none hover:bg-blue-400 transition-all duration-300">
            Mint
          </button>
        </Link>
      </div>

      <div>
        <CardanoWalletSelector />
      </div>
    </nav>
  )
}
