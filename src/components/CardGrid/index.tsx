import React from 'react';

import cards from './data.json';
import { useRouter } from 'next/navigation';
import TiltEffect from '../TiltEffect';
import TextParagrath from '../TextParagrath';
import * as S from './styles';

const CardGrid = () => {
  const router = useRouter();

  return (
    <>
      <TextParagrath
        isBodyText
        subTitle='Other topics'
      />
      <S.Container>
      {cards.map((card, index) => (
        <TiltEffect key={index}>
          <S.Card>
            <S.Content>
              <S.Marker>
                {`0${index + 1}`}
              </S.Marker>
              <S.Title>
                {card.title}
              </S.Title>
              <S.BodyText>
                {card.description}
              </S.BodyText>
              <S.HiperLink 
                onClick={() => router.push(card.redirect as any)}
                type="button"  
              >
                {card.call_to_action}
              </S.HiperLink>
            </S.Content>
          </S.Card>
        </TiltEffect>
      ))}
      </S.Container>
    </>
  );
}

export default CardGrid;
