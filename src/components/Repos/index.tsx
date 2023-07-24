"use client"

import React from 'react';
import TiltEffect from '../TiltEffect';
import works from '../../mocks/works.json';
import * as S from './styles';

const Card = () => (
  <S.Container>
    {works.map((item, index) => (
      <TiltEffect
        shouldStopOnResize
        key={index}
      >
        <S.Card>
          <S.ImageContainer>
            <S.CoverImage
              src={item.imgUrl}
              alt={item.imgAlt}
            />
          </S.ImageContainer>
          <S.Title>{item.title}</S.Title>
          <S.BodyText>{item.description}</S.BodyText>
          <S.ButtonContaier>
            <S.ExternalLink>github</S.ExternalLink>
            <S.HiperLink>info</S.HiperLink>
          </S.ButtonContaier>
        </S.Card>
      </TiltEffect>
    ))}
  </S.Container>
);

export default Card;
