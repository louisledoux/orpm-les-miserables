'use client';

import AgendaItem, {
  AgendaItemProps,
} from '@/components/AgendaItem/AgendaItem';
import { useEffect, useState } from 'react';
import {
  getAgendaDatesFromFirebase,
  getPastDatesFromFirebase,
} from '@/services/agenda.service';

function Agenda() {
  const [currentDates, setCurrentDates] = useState<Array<AgendaItemProps>>([]);
  const [pastDates, setPastDates] = useState<Array<AgendaItemProps>>([]);

  useEffect(() => {
    const fetchDates = async () => {
      const [current, past] = await Promise.all([
        getAgendaDatesFromFirebase(),
        getPastDatesFromFirebase(),
      ]);
      setCurrentDates(current);
      setPastDates(past);
    };

    fetchDates();
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Dates à venir</h2>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 justify-center flex-wrap">
          {currentDates.map(
            ({
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
            ),
          )}
        </div>
      </section>

      {pastDates.length > 0 && (
        <>
          <hr className="w-full" />
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Dates passées
            </h2>
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 justify-center flex-wrap">
              {pastDates.map(
                ({
                  location, dateTime, partner, reservationLink, title,
                }) => (
                  <AgendaItem
                    key={`${location}-${dateTime.getTime()}-${partner}`}
                    location={location}
                    dateTime={dateTime}
                    partner={partner}
                    reservationLink={reservationLink}
                    title={title}
                    isPast
                  />
                ),
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Agenda;
