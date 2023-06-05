import React from 'react';
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

    <br />
    <button onClick={handleClick}>Send Email</button>
    <br />
    <br />
    <br />
    </S.Container>
  );
}

export default EmailSend;
