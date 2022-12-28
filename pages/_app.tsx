import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Inter } from '@next/font/google'
import { SWRConfig } from 'swr'

import { UIProvider } from 'contexts/ui/UIProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <UIProvider>
        <main className={`${inter.className}`}>
          <Component {...pageProps} />
        </main>
      </UIProvider>
    </SWRConfig>
  )
}
