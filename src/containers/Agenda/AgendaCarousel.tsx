'use client';

import AgendaItem, { AgendaItemProps } from '@/components/AgendaItem/AgendaItem';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import Typography from '@/components/Typography/Typography';

const { Title } = Typography;

type DateCarouselProps = {
  datesData: Array<AgendaItemProps>,
}
function DateCarousel({ datesData }: DateCarouselProps) {
  return (
    <>
      <Title level={2} className="lg:mb-10px text-center">
        Nos prochaines dates
      </Title>
      <Carousel
        autoPlay={false}
        infiniteLoop={false}
        showArrows
        showThumbs={false}
        showStatus={false}
        className="w-full"
      >
        {datesData.map(({
          title, date, location, reservationlink,
        }) => (
          <AgendaItem
            key={`${title}-${date}-${location}`}
            date={date}
            title={title}
            location={location}
            reservationlink={reservationlink}
          />
        ))}
      </Carousel>
    </>
  );
}

export default DateCarousel;
