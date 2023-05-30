import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import experiences from './data.json';
import * as S from './styles';

type experienceType = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: experienceType }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836" }}
      contentArrowStyle={{ borderRight: "7px solid #000" }}
      date={ <S.Date>{experience.date}</S.Date> as any }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <S.Company>
          <S.Logo
            src={experience.icon}
            alt={experience.company_name}
          />
        </S.Company>
      }
    >
      <div>
        <S.JobTitle>
          {experience.title}
        </S.JobTitle>
        <S.Desc>
          {experience.company_name}
        </S.Desc>
      </div>

      <S.UnordedList>
        {experience.points.map((point, index) => (
          <S.Item key={index}>
            {point}
          </S.Item>
        ))}
      </S.UnordedList>
    </VerticalTimelineElement>
  );
};

const Experience = () => (
  <S.Card>
    <VerticalTimeline lineColor="#151030">
      {experiences.map((experience , index: number) => (
        <ExperienceCard
          key={index}
          experience={experience}
        />
      ))}
    </VerticalTimeline>
  </S.Card>
);

export default Experience;
