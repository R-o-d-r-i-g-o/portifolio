import React from 'react';
import * as S from './styles';
import { AnimatedView } from '../Navbar/styles';
import { saveAs } from 'file-saver';

const DownloadPDF = () => {
  const handleRedirect = () => {
    window.open('https://docs.google.com/document/d/11yKvY3V6maZMbsJCR1IJDDWkXWfjDTM2-YJDrTqPoq0/edit?usp=sharing', '_blank');
  };

  const handleDownload = () => {
    const fileId = '11yKvY3V6maZMbsJCR1IJDDWkXWfjDTM2-YJDrTqPoq0';
    const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;

    saveAs(downloadUrl, 'RodrigoMRibeiro_Resume.pdf');
  };

  return (
    <S.Container>
      <AnimatedView>
        <S.Button onClick={handleRedirect}>
          Access CV
          <S.LinkImg />
        </S.Button>
      </AnimatedView>
      <AnimatedView>
        <S.Button onClick={handleDownload}>
          Download CV
          <S.DownloadImg />
        </S.Button>
      </AnimatedView>
    </S.Container>
  );
};

export default DownloadPDF;