import React from 'react';
import * as S from './styles';
import TiltEffect from '../TiltEffect';
import { saveAs } from 'file-saver';

const DownloadPDF = () => {
  const handleRedirect = () => {
    window.open('https://docs.google.com/document/d/11yKvY3V6maZMbsJCR1IJDDWkXWfjDTM2-YJDrTqPoq0/edit?usp=sharing', '_blank');
  };

  const handleDownload = () => {
    const fileId = '11yKvY3V6maZMbsJCR1IJDDWkXWfjDTM2-YJDrTqPoq0';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // fetch(downloadUrl, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: 'Bearer AC4w5Vjfhl0Nxgy-yz1oKOnpoI0B_EdPkA:1686532041565', 
    //   },
    // })
    // .then((response) => response.blob())
    // .then((blob) => {
    //   saveAs(blob, 'RodrigoMRibeiro_Resume.pdf');
    // })

    saveAs(`https://drive.google.com/uc?export=download&id=${fileId}`, 'RodrigoMRibeiro_Resume.pdf');
  };

  return (
    <S.Container>
      <TiltEffect shouldStopOnResize>
        <S.Button onClick={handleRedirect}>
          Access CV
          <S.LinkImg />
        </S.Button>
      </TiltEffect>
      <TiltEffect shouldStopOnResize>
        <S.Button onClick={handleDownload}>
          Download CV
          <S.DownloadImg />
        </S.Button>
      </TiltEffect>
    </S.Container>
  );
};

export default DownloadPDF;