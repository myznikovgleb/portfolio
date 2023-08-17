import dynamic from 'next/dynamic'

import FootPanel from '../components/FootPanel'
import HeadPanel from '../components/HeadPanel'
import ReplayButton from '../components/ReplayButton'
import { Keyboard, Pointer } from '../controls'
import { useIsMobileDevice } from '../utils'

const Sandbox = dynamic(() => import('../components/Sandbox'), {
  ssr: false
})

export default function Home() {
  const isMobileDevice = useIsMobileDevice()

  return (
    <main id="canvas" className="bg-[#ffffff] dark:bg-[#111827]">
      <Sandbox />

      <Keyboard />
      <Pointer />
      <ReplayButton />

      {isMobileDevice ? <FootPanel /> : <HeadPanel />}
    </main>
  )
}
