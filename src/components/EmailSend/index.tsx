import React from 'react';
import { Container } from '../Documents/styles';
import { AnimatedView } from '../Navbar/styles';
import * as S from './styles';

const EmailSend = () => {
  const handleClick = () => {
    const emailContent = encodeURIComponent('<p>Hello, <strong>Recipient</strong>!</p>');
    const emailUrl = `mailto:rodrigomarqribeiro@gmail.com?subject=Example%20Email&body=${emailContent}`;

    window.location.href = emailUrl;
  };

  return (
    <S.Container>
      <S.Line />
      <S.MediaSet>
        <AnimatedView>
          <S.Medias>
            <S.LinkinImg />
          </S.Medias>
        </AnimatedView>
        <AnimatedView>
          <S.Medias>
            <S.GithubImg />
          </S.Medias>
        </AnimatedView>
      </S.MediaSet>


    <br />
    <button onClick={handleClick}>Send Email</button>
    <br />
    <br />
    <br />
    </S.Container>
  );
}

export default EmailSend;
