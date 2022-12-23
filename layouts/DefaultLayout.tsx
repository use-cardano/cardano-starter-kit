import { Navigation } from "components/Navigation"
import Head from "next/head"
import { PropsWithChildren } from "react"

export const DefaultLayout = ({ children }: PropsWithChildren<{}>) => {
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

      <div className="container mx-auto px-4">
        <Navigation />

        <main>{children}</main>
      </div>
    </>
  )
}
