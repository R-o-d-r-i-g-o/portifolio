"use client"

import React from "react";
import CoverPage from '../components/CoverPage'
import loading from '../../public/animations/loading.json';

const LoadingPage = () => <CoverPage lottie={loading} />;

export default LoadingPage;