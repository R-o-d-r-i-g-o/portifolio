import React from 'react'

import styled from 'styled-components'

const Paragrath = styled.p`
  cursor: default;
  text-align: center;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.bodyColor};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const HeadLine = styled.h2`
  font-family: 'slate', sans-serif;
  font-weight: 900;
  font-size: 30px;

  @media (min-width: 640px) {
    font-size: 50px;
  }

  @media (min-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 400px) {
    font-size: 40px;
  }
`

const Card = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

const Date = styled.div`
  cursor: default;
  margin-inline: 15px;
  color: ${({ theme }) => theme.textColor};
`

const Company = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Logo = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
`

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.textColor};
  font-size: 24px;
  font-weight: bold;
  cursor: default;
`

const Desc = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  font-weight: 600;
  cursor: default;
  margin: 0;
`

const UnordedList = styled.ul`
  margin-top: 1.25rem;
  list-style-type: disc;
  margin-left: 1.25rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`

const Item = styled.li`
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  padding-left: 0.25rem;
  letter-spacing: 0.05em;
`

export {
  Paragrath,
  HeadLine,
  Card,
  Date,
  Company,
  Logo,
  JobTitle,
  Desc,
  UnordedList,
  Item
}
