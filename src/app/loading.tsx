import React, { Suspense } from 'react'
import CoverPage from '../components/CoverPage'
import loading from '../../public/animations/loading.json'

const LoadingPage = () => (
  <Suspense fallback={<></>}>
    <CoverPage lottie={loading} />
  </Suspense>
)

export default LoadingPage
