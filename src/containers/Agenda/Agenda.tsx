import Typography from '@/components/Typography/Typography';
import RoutesPathEnum from '@/routes/Routes.enum';
import Button from '@/components/Button/Button';
import React from 'react';

const { Title, Paragraph } = Typography;

function NoDate() {
  return (
    <div className="flex flex-col items-center bg-secondary p-sectionPage m-section">
      <Title level={2} className="m-sectionTitle">
        En attendant notre spectacle...
      </Title>
      <Paragraph className="font-normal text-white text-center text-22 m-paragraph">
        {'Impatients d’y être ?\n'
          + 'Promis, les dates seront annoncées d’ici peu sur notre site Internet et sur nos réseaux sociaux !\n'
          + 'En attendant, nous vous invitons à découvrir nos précédentes représentations...'}
      </Paragraph>
      <Button
        title="Découvrir"
        url={RoutesPathEnum.HOMEPAGE}
        type="primary"
      />
    </div>
  );
}

function Agenda() {
  // TODO: add calendar
  return NoDate();
}

export default Agenda;
