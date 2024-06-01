'use client';

import AgendaItem, { AgendaItemProps } from '@/components/AgendaItem/AgendaItem';
import { useEffect, useState } from 'react';
import { getAgendaDatesFromFirebase } from '@/services/agenda.service';

function Agenda() {
  const [datesData, setDatesData] = useState<Array<AgendaItemProps>>([]);

  useEffect(() => {
    const fetchDates = async () => {
      const data = await getAgendaDatesFromFirebase();
      setDatesData(data);
    };

    fetchDates();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24 flex-wrap">
      {datesData.map(({
        location, dateTime, partner, reservationLink, title,
      }) => (
        <AgendaItem
          key={`${location}-${dateTime.getTime()}-${partner}`}
          location={location}
          dateTime={dateTime}
          partner={partner}
          reservationLink={reservationLink}
          title={title}
        />
      ))}
    </div>
  );
}

export default Agenda;
