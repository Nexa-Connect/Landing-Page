import { lazy, Suspense, memo } from 'react'
import { Spin } from 'antd'
import { Header, Footer } from '@/components/layout'

const Hero = lazy(() => import('@/components/sections/Hero'))
const Services = lazy(() => import('@/components/sections/Services'))
const About = lazy(() => import('@/components/sections/About'))
const Contact = lazy(() => import('@/components/sections/Contact'))

const Loading = memo(function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <Spin size="large" />
    </div>
  )
})

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Services />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default memo(App)
