import React from "react";

const EmailSend = () => {
  const handleClick = () => {
    const emailContent = encodeURIComponent('<p>Hello, <strong>Recipient</strong>!</p>');
    const emailUrl = `mailto:rodrigomarqribeiro@gmail.com?subject=Example%20Email&body=${emailContent}`;

    window.location.href = emailUrl;
  };

  return (
    <button onClick={handleClick}>Send Email</button>
  );
}

export default EmailSend;
