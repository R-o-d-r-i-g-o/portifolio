'use client'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;

  @media screen and (max-width: 775px) {
    flex-direction: column;
    margin: 0;
  }
`

const LeftDiv = styled.div`
  padding-top: 45px;
  flex: 1.5;

  @media screen and (max-width: 775px) {
    padding: 0;
  }
`

const RigthDiv = styled.div`
  align-self: center;
  flex: 1;
`

const AnimationView = styled.div`
  height: 250px;
  width: 250px;
  margin: 0 auto;
`

export { Container, LeftDiv, RigthDiv, AnimationView }
