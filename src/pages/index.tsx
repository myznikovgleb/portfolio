import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout'), { ssr: false })
const Sandbox = dynamic(() => import('../components/Sandbox'), {
  ssr: false
})

export default function Home() {
  return (
    <Layout>
      <Sandbox />
    </Layout>
  )
}
