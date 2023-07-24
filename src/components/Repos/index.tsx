"use client"

import React from 'react';
import TiltEffect from '../TiltEffect';
import works from '../../mocks/works.json';
import * as S from './styles';

const Card = () => {
  const [isModalOpen, setIsModalOpen] =
    React.useState<string>('');

  const handleClose = () => {
    setIsModalOpen('');
  };
  
  return (
    <S.Container>
      {works.map((item, index) => (
        <div key={index}>
          <TiltEffect shouldStopOnResize>
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
                <S.ExternalLink onClick={() => window.open(item.link)}>
                  github
                </S.ExternalLink>
                <S.HiperLink onClick={() => setIsModalOpen(index.toString())}>
                  info
                </S.HiperLink>
              </S.ButtonContaier>
            </S.Card>
          </TiltEffect>
          <S.ModalItem
            title="Details"
            open={isModalOpen === index.toString()}
            onOk={handleClose}
            onCancel={handleClose}
          >
            {item.description}
          </S.ModalItem>
        </div>
      ))}
    </S.Container>
  );
}

export default Card;
