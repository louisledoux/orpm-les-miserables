import { Metadata } from 'next';
import Image from 'next/image';
import onJoueImage from '@/assets/pages/homepage/images/onJoueImage.jpg';
import mainPersonnages from '@/assets/pages/personnages/images/mainpersonnages.jpg';
import mainAuteur from '@/assets/pages/auteur-et-oeuvres/images/mainAuteur.jpg';
import mainComedie from '@/assets/pages/comedie-musicale/images/mainComedie.jpg';
import mainequipeArtistique from '@/assets/pages/equipeArtistique/images/mainequipeArtistique.jpg';
import Typography from '@/components/Typography/Typography';
import PlayCard, { PlayCardProps } from '@/components/PlayCard/PlayCard';

export const metadata: Metadata = {
  title: 'Jouons !',
  openGraph: {
    title: 'Jouons !',
  },
};

const playCardsData: PlayCardProps[] = [
  {
    image: mainAuteur,
    text: 'Victor Hugo',
    link: 'https://exercice-victor-hugo.orpm-les-miserables.fr/',
  },
  {
    image: mainPersonnages,
    text: 'Les personnages',
    link: 'https://exercice-personnages.orpm-les-miserables.fr',
  },
  {
    image: mainequipeArtistique,
    text: 'La poésie',
    link: 'https://exercice-poesie.orpm-les-miserables.fr',
  },
  {
    image: mainComedie,
    text: 'La musique',
    link: 'https://exercice-musique.orpm-les-miserables.fr',
  },
];

export default function JouonsPage() {
  return (
    <>
      <div className="h-headerImage w-full">
        <Image
          src={onJoueImage}
          alt="Un homme qui joue du saxophone"
          style={{ objectPosition: '50% 20%' }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:mb-60px mb-30px">
        <Typography.Title level={1}>
          Jouons !
        </Typography.Title>
        <div className="mb-60px text-center px-20px lg:px-120px">
          <Typography.Paragraph className="mb-2 !text-base lg:!text-22">
            4 jeux vous sont proposé afin de découvrir l&apos;univers autour des Misérables !
          </Typography.Paragraph>
          <div className="flex flex-row gap-4 mt-40px">
            {playCardsData.map(({ image, text, link }) => (
              <PlayCard
                key={text}
                image={image}
                text={text}
                link={link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
