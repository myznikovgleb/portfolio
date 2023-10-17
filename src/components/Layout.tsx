import Head from 'next/head'

import FootPanel from '../components/FootPanel'
import HeadPanel from '../components/HeadPanel'
import { useIsMobileDevice } from '../utils'
import { usePreferences } from '../store/preferences'

interface LayoutProps {
  children: React.ReactNode
}

const title = 'Portfolio App'
const titleOG = 'Portfolio app'
const description = 'Portfolio app developed by Gleb Myznikov'

export default function Layout(props: LayoutProps) {
  const { children } = props

  const isMobileDevice = useIsMobileDevice()
  const isDarkMode = usePreferences((preferences) => preferences.isDarkMode)

  return (
    <>
      <Head>
        {isDarkMode ? (
          <link rel="shortcut icon" href="/favicon/icon_dark.svg" />
        ) : (
          <link rel="shortcut icon" href="/favicon/icon_light.svg" />
        )}

        <meta name="og:title" content={titleOG} />
        <meta name="og:description" content={description} />

        <meta name="description" content={description} />

        <title>{title}</title>
      </Head>
      <main>
        {children}
        {isMobileDevice ? <FootPanel /> : <HeadPanel />}
      </main>
    </>
  )
}
