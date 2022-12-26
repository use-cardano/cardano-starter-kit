import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { twMerge } from "tailwind-merge"
import { CardanoWalletSelector } from "use-cardano"

const className =
  "h-10 text-white font-bold tracking-widest uppercase rounded mr-2 px-6 flex items-center bg-blue-300 shadow shadow-blue-100s hover:shadow-none hover:bg-blue-400 transition-all duration-300"

export const Navigation = () => {
  const { asPath } = useRouter()

  console.log(asPath)

  const isHome = useMemo(() => asPath === "/", [asPath])
  const isTransact = useMemo(() => asPath === "/transact", [asPath])
  const isSign = useMemo(() => asPath === "/sign", [asPath])
  const isMint = useMemo(() => asPath === "/mint", [asPath])

  return (
    <nav className="flex h-24 items-center justify-between w-full py-2">
      <div className="flex items-center">
        <Link href="/">
          <button className={twMerge(className, isHome && "text-blue-500")}>home</button>
        </Link>

        <Link href="/transact">
          <button className={twMerge(className, isTransact && "text-blue-500")}>transact</button>
        </Link>

        <Link href="/sign">
          <button className={twMerge(className, isSign && "text-blue-500")}>Sign</button>
        </Link>

        <Link href="/mint">
          <button className={twMerge(className, isMint && "text-blue-500")}>Mint</button>
        </Link>
      </div>

      <div>
        <CardanoWalletSelector />
      </div>
    </nav>
  )
}
