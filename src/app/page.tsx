"use client"

import Presentation from '../components/Presentation';
import EmailSend from '../components/EmailSend';
import CardGrid from '../components/CardGrid';
import TextParagrath from '@/components/TextParagrath';
import DownloadPDF from '../components/Documents';
import Skills from '../components/Skills';

const Home = () => {

  return (
    <>
      <Presentation />
      <TextParagrath 
        isBodyText
        subTitle='About me'
        bodyText={
          'Rodrigo is a full-cycle software engineer and cloud associate based in Brazil, with a passion for '    +
          'building scalable and reliable systems. He possesses a strong background in developing, maintaining, ' +
          'and deploying payment systems and programs. Currently, his focus lies in exploring cloud solutions  '  +
          'and their practical applications in solving real-life problems.'
        }
      />
      <TextParagrath 
        isBodyText
        subTitle='Education'
        bodyText={
          'One and a half years before securing his first job as a programmer, Rodrigo embarked on his software '   +
          'engineering journey by enrolling in the esteemed software engineering course at Uni-FACEF. Since then, ' + 
          'he has diligently pursued practical experience through independent studies, separate from his academic ' + 
          'and professional commitments. - For more details, explore the certifications section on my linkedin '    +
          'profile.'
        }
      />
      <Skills />
      <DownloadPDF />
      <CardGrid />
      <EmailSend />
    </>
  )
};

export default Home;
