"use client"

import JobExperience from '../components/JobExperience';
import Presentation from '../components/Presentation';
import EmailSend from '../components/EmailSend';
import CardGrid from '../components/CardGrid';
import DownloadPDF from '../components/Documents';
import Skills from '../components/Skills';

const Home = () => {

  return (
    <>
      <Presentation />
      <JobExperience />
      <Skills />
      <DownloadPDF />
      <CardGrid />
      <EmailSend />
    </>
  )
};

export default Home;
