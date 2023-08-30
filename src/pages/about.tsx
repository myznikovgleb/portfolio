import Layout from '../components/Layout'
import Credits from '../components/Credits'
import { useIsMobileDevice } from '../utils'

export default function About() {
  const isMobileDevice = useIsMobileDevice()

  return (
    <Layout>
      <div
        className={`w-full h-full flex flex-col items-center justify-between ${
          isMobileDevice && 'pb-14'
        }`}
      >
        <div className="flex flex-col items-center gap-12 md:gap-24 pt-24 text-xl">
          <h2 className="font-bold text-5xl">✌️</h2>
          <div className="flex flex-col items-center gap-4">
            <p>
              I am <span className="font-bold">Gleb Myznikov</span>
            </p>
            <p>
              I am frontend web <span className="font-bold">developer</span>
            </p>
            <p>
              <span className="font-bold">Walking man</span> is one of my pet
              projects
            </p>
          </div>
        </div>

        <Credits />
      </div>
    </Layout>
  )
}
