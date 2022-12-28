import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { twMerge } from "tailwind-merge"
import { CardanoWalletSelector } from "use-cardano"

const className =
  "h-10 text-white font-bold tracking-widest uppercase rounded mr-2 px-6 flex items-center dark:hover:text-white bg-blue-300 dark:bg-transparent dark:hover:bg-transparent dark:shadow-none shadow shadow-blue-100s hover:shadow-none hover:bg-blue-400 transition-all duration-300 hover:underline underline-offset-4"

const activeClassName =
  "text-black dark:text-white ark:bg-transparent dark:shadow-none dark:hover:bg-transparent dark:underline"

export const Navigation = () => {
  const { asPath } = useRouter()

  const isHome = useMemo(() => asPath === "/", [asPath])
  const isTransact = useMemo(() => asPath === "/transact", [asPath])
  const isSign = useMemo(() => asPath === "/sign", [asPath])
  const isMint = useMemo(() => asPath === "/mint", [asPath])

  return (
    <nav className="flex h-24 items-center justify-between w-full py-2">
      <div className="flex items-center">
        <Link href="/">
          <button className={twMerge(className, isHome && activeClassName)}>home</button>
        </Link>

        <Link href="/transact">
          <button className={twMerge(className, isTransact && activeClassName)}>transact</button>
        </Link>

        <Link href="/sign">
          <button className={twMerge(className, isSign && activeClassName)}>Sign</button>
        </Link>

        <Link href="/mint">
          <button className={twMerge(className, isMint && activeClassName)}>Mint</button>
        </Link>
      </div>

      <div>
        <CardanoWalletSelector />
      </div>
    </nav>
  )
}
