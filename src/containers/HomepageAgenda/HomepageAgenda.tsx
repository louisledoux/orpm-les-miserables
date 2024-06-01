import Typography from '@/components/Typography/Typography';
import RoutesPathEnum from '@/routes/Routes.enum';
import Button from '@/components/Button/Button';
import React from 'react';

const { Title, Paragraph } = Typography;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NoDate() {
  return (
    <>
      <Title level={2} className="lg:mb-60px mb-30px text-center">
        En attendant notre spectacle...
      </Title>
      <Paragraph className="font-normal text-white text-center lg:!text-22 mb-30px">
        {'Impatients d’y être ?\n'
          + 'Promis, les dates seront annoncées d’ici peu sur notre site Internet et sur nos réseaux sociaux !\n'
          + 'En attendant, nous vous invitons à découvrir nos précédentes représentations...'}
      </Paragraph>
      <Button
        title="Découvrir"
        url={RoutesPathEnum.PRECEDENTS_SPECTACLES}
        type="primary"
      />
    </>
  );
}

function RedirectToAgenda() {
  return (
    <>
      <Title level={2} className="lg:mb-60px mb-30px text-center">
        Nos prochaines dates
      </Title>
      <Paragraph className="font-normal text-white text-center lg:!text-22 mb-30px">
        {'Nous nous représentons à partir de fin 2024 jusque fin 2025 partout dans la région !\n\n'
          + 'Venez partager avec nous un moment où art et générosité se rencontrent.\n'
          + 'Chaque billet vendu contribue à des projets locaux contre la pauvreté et pour la santé.\n\n'
          + "Pour voir toutes nos prochaines dates, c'est par ici !"}
      </Paragraph>
      <Button
        title="Voir toutes les dates"
        url={RoutesPathEnum.AGENDA}
        type="primary"
      />
    </>
  );
}

async function HomepageAgenda() {
  // const [datesData, setDatesData] = useState<Array<HomepageAgendaItemProps>>([]);
  //
  // useEffect(() => {
  //   const fetchDates = async () => {
  //     const data = await getHomepageDatesFromFirebase();
  //     setDatesData(data);
  //   };
  //
  //   fetchDates();
  // }, []);

  return (
    <div id="agenda" className="flex flex-col items-center bg-secondary px-20px py-30px lg:py-60px lg:px-40px mb-60px lg:mb-120px">
      <RedirectToAgenda />
      {/* {datesData.length > 0 ? <DateCarousel datesData={datesData} /> : <NoDate />} */}
    </div>
  );
}

export default HomepageAgenda;
