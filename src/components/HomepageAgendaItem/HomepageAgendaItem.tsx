import Typography from '@/components/Typography/Typography';
import Button from '@/components/Button/Button';

const { Paragraph } = Typography;

export interface HomepageAgendaItemProps {
  /**
   * The date of the event
   */
  date: string,
  /**
   * The title of the event
   */
  title: string,
  /**
   * The location of the event
   */
  location: string,
  /**
   * The link to the event
   */
  reservationlink: string,
}

/**
 * The agenda item component
 * @param {HomepageAgendaItemProps} props - The props
 */
function HomepageAgendaItem({
  date, title, location, reservationlink,
}: HomepageAgendaItemProps) {
  const hasReservationLink = reservationlink !== '#';

  return (
    <div className="flex flex-col h-full justify-between items-center lg:px-40px lg:py-30px lg:mb-30px mb-30px px-20px pt-20px pb-30px text-white">
      <div className="lg:mb-0">
        <p className="font-semibold lg:text-xl text-md text-primary mb-10px">{date}</p>
        <p className="lg:text-3xl text-xl font-semibold mb-10px lg:mb-20px">{title}</p>
        <Paragraph className="text-wrap">{location}</Paragraph>
      </div>
      <div className="flex items-center justify-center w-full mb-20px lg:mb-30px">
        <Button
          title={hasReservationLink ? 'Réserver' : 'Réservations à venir'}
          url={reservationlink}
          externalUrl
          disabled={!hasReservationLink}
          type="primary"
        />
      </div>
    </div>
  );
}

export default HomepageAgendaItem;
