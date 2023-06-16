import React from 'react';
import Typography from '../Typography/Typography';

interface BlockTextProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
}

function BlockText({
  title, text1, text2, text3,
}: BlockTextProps) {
  return (
    <div className="max-w-inBlock w-full p-blockText flex flex-col justify-center">
      <div className="m-title">
        <Typography.Title level={2}>{title}</Typography.Title>
      </div>
      <div className="m-paragraph text-justify">
        <Typography.Paragraph>{text1}</Typography.Paragraph>
      </div>
      <div className="m-paragraph text-justify">
        <Typography.Paragraph>{text2}</Typography.Paragraph>
      </div>
      <div className="text-justify">
        <Typography.Paragraph>{text3}</Typography.Paragraph>
      </div>
    </div>
  );
}

export default BlockText;
