'use client'

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

import { defaultTheme } from '../../themes/defaultTheme'
import { useLocalStorage } from 'usehooks-ts'
import useTranslation from 'next-translate/useTranslation'
import experiences from '../../mocks/experiences.json'
import * as S from './styles'

type experienceType = {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

const ExperienceCard = ({ experience }: { experience: experienceType }) => {
  const [theme] = useLocalStorage('theme', defaultTheme)
  const { t } = useTranslation('common')

  return (
    <VerticalTimelineElement
      contentStyle={{ background: theme.bodyColor }}
      contentArrowStyle={{ borderRight: `7px solid ${theme.bodyColor}` }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      date={(<S.Date>{t(experience.date)}</S.Date>) as any}
      iconStyle={{ background: theme.bodyColor }}
      icon={
        <S.Company>
          <S.Logo src={t(experience.icon)} />
        </S.Company>
      }
    >
      <div>
        <S.JobTitle>{t(experience.title)}</S.JobTitle>
        <S.Desc>{t(experience.company_name)}</S.Desc>
      </div>
      <S.UnordedList>
        {experience.points.map((point, index) => (
          <S.Item key={index}>{t(point)}</S.Item>
        ))}
      </S.UnordedList>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <S.Card>
      <VerticalTimeline lineColor={theme.bodyColor}>
        {experiences.map((experience, index: number) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </S.Card>
  )
}

export default Experience
