import Image, { StaticImageData } from 'next/image';
import les111DesArts from '@/assets/images/partners/les111DesArts_logo.png';
import asp from '@/assets/images/partners/asp_logo.jpg';
import laPommeraie from '@/assets/images/partners/laPommeraie_logo.png';
import lesRestosDuCoeur from '@/assets/images/partners/lesRestosDuCoeur_logo.svg';
import orpm from '@/assets/logo.svg';
import Icon from '@/components/Icon/Icon';
import Typography from '@/components/Typography/Typography';
import Button from '@/components/Button/Button';

const { Paragraph } = Typography;

type PartnerLogoType = {
  image: StaticImageData,
  alt: string,
}
function getPartnerLogo(partner: string): PartnerLogoType {
  switch (partner) {
    case 'Les 111 des Arts':
      return {
        image: les111DesArts,
        alt: 'Logo Les 111 des Arts',
      };
    case 'ASP':
      return {
        image: asp,
        alt: 'Logo ASP',
      };
    case 'La Pommeraie':
      return {
        image: laPommeraie,
        alt: 'Logo La Pommeraie',
      };
    case 'Les Restos du Coeur':
      return {
        image: lesRestosDuCoeur,
        alt: 'Logo Les Restos du Coeur',
      };
    default:
      return {
        image: orpm,
        alt: 'Logo ORPM',
      };
  }
}

export type AgendaItemProps = {
  /**
   * The location of the event
   */
  location: string,
  /**
   * The date of the event
   */
  dateTime: Date,
  /**
   * The event's partner
   */
  partner: string,
  /**
   * Optional reservation link
   */
  reservationLink?: string,
  /**
   * Event title
   */
  title: string,
}
function AgendaItem({
  location, dateTime, partner, reservationLink, title,
}: AgendaItemProps) {
  const hasReservationLink = reservationLink !== '#';
  const partnerLogo = getPartnerLogo(partner);

  const day = dateTime.getDate();
  const month = dateTime.toLocaleString('fr-FR', { month: 'short' });
  const year = dateTime.getFullYear();
  const hour = `${dateTime.getHours()}h${dateTime.getMinutes() === 0 ? '00' : dateTime.getMinutes()}`;

  return (
    <div className="flex flex-col px-8 py-8 lg:py-6 bg-secondary flex-1 gap-5 md:min-w-[45%] lg:min-w-[25%] lg:max-w-[33%] rounded-md">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center w-full p-4 justify-center bg-white min-h-[140px] rounded-md">
            <Image src={partnerLogo.image} alt={partnerLogo.alt} className="max-h-[100px] object-contain" />
          </div>
          <span className="text-white tracking-wide">{title}</span>
        </div>
        <div className="flex justify-center items-center text-primary gap-2 text-xl font-light">
          <Icon icon={['fas', 'location-dot']} />
          <Paragraph className="tracking-wide font-medium">{location}</Paragraph>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center gap-4">
          <div
            className="flex flex-col justify-center items-center border-r border-white px-4 text-white"
          >
            <span className="text-4xl font-semibold">{day}</span>
            <span className="text-xl font-semibold">{month}</span>
            <span className="text-md tracking-wider">{year}</span>
          </div>
          <div className="flex gap-2 text-primary items-center">
            <Icon icon={['fas', 'clock']} />
            <Paragraph className="text-xl">{hour}</Paragraph>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button
            externalUrl
            url={reservationLink}
            disabled={!hasReservationLink}
            title={hasReservationLink ? 'Réserver' : 'Réservation à venir'}
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default AgendaItem;
