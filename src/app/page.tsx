"use client"

import Presentation from '@/components/Presentation';
import EmailSend from '@/components/EmailSend';
import TextParagrath from '@/components/TextParagrath';
import RedirectToCv from '@/components/Documents';
import useTranslation from 'next-translate/useTranslation'

import Skills from '../components/Skills';

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Presentation />
      <RedirectToCv />
      <TextParagrath 
        isBodyText
        subTitle={t('page.work-title')}
        bodyText={t('page.work-description')}
      />
      <TextParagrath 
        isBodyText
        subTitle={t('page.education-title')}
        bodyText={t('page.education-description')}
      />
      <Skills />
      <EmailSend />
    </>
  )
};

export default Home;
