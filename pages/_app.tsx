import "../styles/globals.css"
import type { AppProps } from "next/app"
import { CardanoProvider, CardanoToaster, UseCardanoOptions } from "use-cardano"
import "use-cardano/styles/use-cardano.css"

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
      <Component {...pageProps} />

      <CardanoToaster />
    </CardanoProvider>
  )
}
