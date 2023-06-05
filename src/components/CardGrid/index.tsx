import React, { lazy } from 'react';

import cards from './data.json';
import { useRouter } from 'next/navigation';
import { AnimatedView } from '../Navbar/styles';
import { SubTitle } from '../Presentation/styles';
import * as S from './styles';

const CardGrid = () => {
  const router = useRouter();

  return (
    <>
      <SubTitle style={{ marginTop: 30, marginBottom: 10 }}>Other topics</SubTitle>
      <S.Container>
      {cards.map((card, index) => (
        <AnimatedView key={index}>
          <S.Card>
            <S.Content>
              <h2>
                {`0${index + 1}`}
              </h2>
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
        </AnimatedView>
      ))}
      </S.Container>
    </>
  );
}

export default CardGrid;
