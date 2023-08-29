import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

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
