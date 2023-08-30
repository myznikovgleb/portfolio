import Head from 'next/head'

import FootPanel from '../components/FootPanel'
import HeadPanel from '../components/HeadPanel'
import { useIsMobileDevice } from '../utils'
import { usePreferences } from '../store/preferences'

interface LayoutProps {
  children: React.ReactNode
}

const title = 'Portfolio app'
const description = "Gleb Myznikov's portfolio web app"
const author = 'Gleb Myznikov'
const keywords = 'portfolio, web, app, threejs, r3f, 3d, gltf'

export default function Layout(props: LayoutProps) {
  const { children } = props

  const isMobileDevice = useIsMobileDevice()
  const isDarkMode = usePreferences((preferences) => preferences.isDarkMode)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {isDarkMode ? (
          <link rel="shortcut icon" href="/icon_dark.svg" />
        ) : (
          <link rel="shortcut icon" href="/icon_light.svg" />
        )}

        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />

        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />

        <meta httpEquiv="content-language" content="en-us" />

        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN}
        />
      </Head>
      <main>
        {children}
        {isMobileDevice ? <FootPanel /> : <HeadPanel />}
      </main>
    </>
  )
}
