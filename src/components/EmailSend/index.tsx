import React from 'react';
import TiltEffect from '../TiltEffect';
import * as S from './styles';

type payload = {
  subject: string;
  body: string;
}

const EmailSend = () => {
  const [emailPayload, setEmailPayload] = React.useState({} as payload);

  const handleSubmit = () => {
    const emailReceiver = 'rodrigomarqribeiro@gmail.com';
    const emailContent = encodeURIComponent(emailPayload?.body);

    const emailUrl = `mailto:${emailReceiver}?subject=${emailPayload?.subject}&body=${emailContent}`;

    window.location.href = emailUrl;
  };

  const data = [
    {
      ref: 'https://www.linkedin.com/in/rodrigo-marques-ribeiro/',
      label: 'Open linkedin',
      icon: <S.LinkinImg />
    },
    {
      ref: 'https://github.com/R-o-d-r-i-g-o',
      label: 'Open github',
      icon: <S.GithubImg />
    },
    {
      ref: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKHQdVtRNwTcMJTNpnSjRrdHlHGzDkMqkBXGVwLSwfBTtWgCMjpWRzpVtJBZTHjrcRKHNWg',
      label: 'Open e-mail',
      icon: <S.GMailImg />
    }
  ];

  return (
    <S.Container>
      <S.Line />
      <S.FormContainer>
        <S.Form>
            <S.Input
              placeholder="Subject"
              value={emailPayload.subject}
              onChange={e => setEmailPayload({ ...emailPayload, subject: e.target.value })}
            />
            <S.TextArea
              placeholder="Write me a message"
              rows={10}
              value={emailPayload.body}
              onChange={e => setEmailPayload({ ...emailPayload, body: e.target.value })}
            />
            <S.SendEmail
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </S.SendEmail>
          </S.Form>
      </S.FormContainer>
      <S.MediaSet>
        {data.map((item, index) => (
          <TiltEffect 
            shouldStopOnResize
            key={index}
          >
            <a
              href={item.ref}
              aria-label={item.label}
              target="_blank"
              rel="noopener"
            >
              <S.Medias>
                {item.icon}
              </S.Medias>
            </a>
          </TiltEffect>
        ))}
      </S.MediaSet>
    </S.Container>
  );
}

export default EmailSend;
