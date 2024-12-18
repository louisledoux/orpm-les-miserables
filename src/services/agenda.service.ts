import { db } from '@/firebase';
// eslint-disable-next-line import/no-extraneous-dependencies
import { collection, getDocs } from '@firebase/firestore';
import { HomepageAgendaItemProps } from '@/components/HomepageAgendaItem/HomepageAgendaItem';
import { AgendaItemProps } from '@/components/AgendaItem/AgendaItem';

type FirebaseDateData = {
  date: string;
  title: string;
  location: string;
  description: string;
  partner: string;
};

function getReservationLinkFromString(description: string): string {
  const reservationLinkMatch = description.match(/^(https?:\/\/\S+)/g)
    || description.match(/^(mailto?:\S+)/g) || description.match(/^(Complet)/g);
  return reservationLinkMatch ? reservationLinkMatch[0] : '#';
}

function formatFirebaseDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
  };

  return new Date(date).toLocaleString('fr-FR', options);
}

function convertFirebaseDateDataToHomepageAgendaItemProps(
  data: FirebaseDateData,
): HomepageAgendaItemProps {
  return {
    date: data.date,
    title: data.title,
    location: data.location,
    reservationlink: data.description ? getReservationLinkFromString(data.description) : '#',
  };
}

function getHomepageDatesFromFirebase(): Promise<Array<HomepageAgendaItemProps>> {
  return getDocs(collection(db, 'dates'))
    .then((querySnapshot) => {
      const dates: Array<HomepageAgendaItemProps> = [];
      querySnapshot.forEach((doc) => {
        const formattedData = convertFirebaseDateDataToHomepageAgendaItemProps(
          doc.data() as FirebaseDateData,
        );
        dates.push(formattedData);
      });
      return dates
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map((date) => ({
          ...date,
          date: formatFirebaseDate(date.date),
        }));
    });
}

function convertFirebaseDateDataToAgendaItemProps(
  data: FirebaseDateData,
): AgendaItemProps {
  return {
    dateTime: new Date(data.date),
    location: data.location,
    partner: data.partner,
    reservationLink: data.description ? getReservationLinkFromString(data.description) : '#',
    title: data.title,
  };
}

function getAgendaDatesFromFirebase(): Promise<Array<AgendaItemProps>> {
  return getDocs(collection(db, 'dates'))
    .then((querySnapshot) => {
      const dates: Array<AgendaItemProps> = [];
      querySnapshot.forEach((doc) => {
        const formattedData = convertFirebaseDateDataToAgendaItemProps(
          doc.data() as FirebaseDateData,
        );
        dates.push(formattedData);
      });
      return dates
        .sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());
    });
}

// eslint-disable-next-line import/prefer-default-export
export { getHomepageDatesFromFirebase, getAgendaDatesFromFirebase };
