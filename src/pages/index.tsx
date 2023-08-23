import dynamic from 'next/dynamic'

const Sandbox = dynamic(() => import('../components/Sandbox'), {
  ssr: false
})

export default function Home() {
  return <Sandbox />
}
