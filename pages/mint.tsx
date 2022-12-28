import * as utils from "lib/minting-utils"
import { useCallback, useMemo, useState } from "react"
import { useCardano, utility } from "use-cardano"

import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Mint() {
  const { lucid, account, showToaster, hideToaster } = useCardano()

  const [name, setName] = useState("")

  const mintNFT = useCallback(async () => {
    try {
      if (!lucid || !account?.address || !name) return

      const nftTx = await utils.mintNFT({ lucid, address: account.address, name })

      showToaster("Minted NFT", `Transaction: ${nftTx}`)
    } catch (e) {
      if (utility.isError(e)) showToaster("Could not mint NFT", e.message)
      else if (typeof e === "string") showToaster("Could not mint NFT", e)
    }
  }, [lucid, account?.address, showToaster, name])

  const burnNFT = useCallback(async () => {
    try {
      if (!lucid || !account?.address || !name) return

      const nftTx = await utils.burnNFT({ lucid, address: account?.address, name })

      showToaster("Burned NFT", `Transaction: ${nftTx}`)
    } catch (e) {
      if (utility.isError(e)) showToaster("Could not burn NFT", e.message)
      else if (typeof e === "string") showToaster("Could not burn NFT", e)
    }
  }, [lucid, account?.address, showToaster, name])

  const canMint = useMemo(() => lucid && account?.address && name, [lucid, account?.address, name])

  return (
    <div className="text-center max-w-4xl m-auto text-gray-900 dark:text-gray-100">
      <h1
        style={inter.style}
        className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
      >
        Mint a Token
      </h1>

      <div style={inter.style} className="my-4 text-center">
        Using Lucid, we can mint a token on the Cardano blockchain.
      </div>

      <div className="text-left my-8">
        <div className="my-4">
          <label className="flex flex-col w-100">
            <span className="text-sm lowercase mb-1">NFT name</span>

            <input
              className="rounded py-1 px-2 text-gray-800 border"
              name="message"
              placeholder="My NFT name"
              value={name || ""}
              onChange={(e) => setName(e.target.value?.toString())}
            />
          </label>
        </div>

        <div className="my-4">
          <button
            disabled={!canMint}
            className="border hover:bg-blue-400 text-white my-4 w-40 py-2 cursor-pointer transition-colors disabled:cursor-not-allowed disabled:text-gray-200 rounded bg-blue-300 disabled:bg-blue-200 dark:bg-white dark:text-gray-800 dark:disabled:bg-white dark:hover:bg-white font-bold uppercase"
            onClick={() => {
              hideToaster()
              mintNFT()
            }}
          >
            mint
          </button>

          <button
            disabled={!canMint}
            className="border ml-4 hover:bg-blue-400 text-white w-40 py-2 cursor-pointer transition-colors disabled:cursor-not-allowed disabled:text-gray-200 rounded bg-blue-300 disabled:bg-blue-200 dark:bg-white dark:text-gray-800 dark:disabled:bg-white dark:hover:bg-white font-bold uppercase"
            onClick={() => {
              hideToaster()
              burnNFT()
            }}
          >
            burn
          </button>
        </div>
      </div>
    </div>
  )
}
