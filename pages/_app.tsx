
import "../styles/globals.css"
import "use-cardano/styles/use-cardano.css"
import "../styles/use-cardano-overrides.css"

import type { AppProps } from "next/app"
import { CardanoProvider, CardanoToaster, UseCardanoOptions } from "use-cardano"
import { DefaultLayout } from "layouts/DefaultLayout"

const options: UseCardanoOptions = {
  allowedNetworks: ["Testnet"],
  testnetNetwork: "Preview",
  node: {
    provider: "blockfrost-proxy",
    proxyUrl: "/api/blockfrost",
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CardanoProvider options={options}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>

      <CardanoToaster />
    </CardanoProvider>
  )
}
