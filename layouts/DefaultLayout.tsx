import LogoWhite from "assets/logo-white.png"
import Logo from "assets/logo.png"
import { Navigation } from "components/Navigation"
import Head from "next/head"
import Image from "next/image"
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

        <footer className="p-4 md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="block dark:hidden">
              <a
                href="https://use-cardano.alangaming.com/"
                className="flex items-center mb-4 sm:mb-0"
              >
                <Image src={Logo} width={200} height={22.2} alt="use-cardano Logo" />
              </a>
            </span>

            <span className="hidden dark:block">
              <a
                href="https://use-cardano.alangaming.com/"
                className="flex items-center mb-4 sm:mb-0"
              >
                <Image src={LogoWhite} width={200} height={22.2} alt="use-cardano Logo" />
              </a>
            </span>

            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              use-cardano™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  )
}
