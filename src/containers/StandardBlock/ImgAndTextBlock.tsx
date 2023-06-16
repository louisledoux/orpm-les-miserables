import React from 'react';
import Image, { StaticImageData } from 'next/image';
import VerticalImgforBlock from '@/components/Image/VerticalImgforBlock';
import BlockText from '@/components/Text/BlockText';

interface ImgAndTextBlockProps {
    imgSrc: StaticImageData;
    imgAlt: string;
    imgStyle?: React.CSSProperties;
    title: string;
    text1: string;
    text2: string;
    text3: string;
  }
  
  const ImgAndTextBlock: React.FC<ImgAndTextBlockProps> = ({ imgSrc, imgAlt, imgStyle, title, text1, text2, text3 }) => {
    return (
      <div className='flex justify-between m-classicBlock p-classicBlock'>
        <VerticalImgforBlock src={imgSrc} alt={imgAlt} style={imgStyle} />
        <BlockText title={title} text1={text1} text2={text2} text3={text3}/>
      </div>
    );
  };
  
  export default ImgAndTextBlock;