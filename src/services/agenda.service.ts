import { db } from '@/firebase';
// eslint-disable-next-line import/no-extraneous-dependencies
import { collection, getDocs } from '@firebase/firestore';
import { AgendaItemProps } from '@/components/AgendaItem/AgendaItem';

type FirebaseDateData = {
  date: string;
  title: string;
  location: string;
  description: string;
};

function getReservationLinkFromString(description: string): string {
  const reservationLinkMatch = description.match(/^(https?:\/\/\S+)/g);
  return reservationLinkMatch ? reservationLinkMatch[0] : '#';
}

function formatFirebaseDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };

  return new Date(date).toLocaleString('fr-FR', options);
}

function convertFirebaseDateDataToAgendaItemProps(data: FirebaseDateData): AgendaItemProps {
  return {
    date: data.date,
    title: data.title,
    location: data.location,
    reservationlink: data.description ? getReservationLinkFromString(data.description) : '#',
  };
}

function getDatesFromFirebase(): Promise<Array<AgendaItemProps>> {
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
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map((date) => ({
          ...date,
          date: formatFirebaseDate(date.date),
        }));
    });
}

// eslint-disable-next-line import/prefer-default-export
export { getDatesFromFirebase };