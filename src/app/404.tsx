import React, { Suspense } from 'react'
import CoverPage from '../components/CoverPage'
import notFound from '../../public/animations/not-found.json'

const Works = () => (
  <Suspense fallback={<></>}>
    <CoverPage lottie={notFound} />
  </Suspense>
)

export default Works
