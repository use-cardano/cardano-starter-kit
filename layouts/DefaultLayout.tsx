import { Footer } from "components/Footer"
import { Navigation } from "components/Navigation"
import Head from "next/head"
import { PropsWithChildren } from "react"

export const DefaultLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Head>
        <title>Cardano Starter Kit</title>

        <meta name="description" content="Build Web3 applications on Cardano" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="container mx-auto px-4">
        <Navigation />

        <main className="min-h-[calc(100vh-295px)] pt-12">{children}</main>

        <Footer />
      </div>
    </>
  )
}
