import Link from 'next/link';
import RoutesPathEnum from '@/routes/Routes.enum';

type FooterLink = {
  text: string,
  url: string,
  externalLink?: boolean,
}

const footerLinks: FooterLink[] = [
  { text: 'Accueil', url: RoutesPathEnum.HOMEPAGE },
  { text: 'Auteur et œuvres', url: RoutesPathEnum.AUTEUR_ET_OEUVRES },
  { text: 'L\'histoire', url: RoutesPathEnum.HISTOIRE },
  { text: 'Les personnages', url: RoutesPathEnum.PERSONNAGES },
  { text: 'Le spectacle musicale', url: RoutesPathEnum.COMEDIE_MUSICALE },
  { text: 'Jouons !', url: '/#jouons' },
  { text: 'L\'orchestre', url: RoutesPathEnum.ORCHESTRE },
  { text: 'L\'équipe artistique', url: RoutesPathEnum.EQUIPE_ARTISTIQUE },
  { text: 'L\'équipe technique', url: RoutesPathEnum.EQUIPE_TECHNIQUE },
  { text: 'La troupe', url: RoutesPathEnum.TROUPE },
  { text: 'Nos précédents spectacles', url: RoutesPathEnum.PRECEDENTS_SPECTACLES },
  { text: 'L\'agenda', url: '/#agenda' },
  { text: 'Billetterie', url: '/#agenda' },
  {
    text: 'Nous soutenir',
    url: 'https://www.helloasso.com/associations/orchestre-regional-du-pevele-melantois/collectes/aidez-nous-a-financer-les-costumes-de-notre-spectacle',
    externalLink: true,
  },
  { text: 'Nous contacter', url: RoutesPathEnum.CONTACT },
];

function divideLinksInColumns(links: FooterLink[]) {
  const linksPerColumns = 5;

  return links.reduce((linksArray, link, index) => {
    const columnIndex = Math.floor(index / linksPerColumns);

    if (!linksArray[columnIndex]) {
      // eslint-disable-next-line no-param-reassign
      linksArray[columnIndex] = [];
    }

    linksArray[columnIndex].push(link);
    return linksArray;
  }, [] as FooterLink[][]);
}

function Footer() {
  return (
    <footer className="lg:py-60px py-30px bg-secondary text-white">
      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center lg:mb-60px mb-30px">
        {divideLinksInColumns(footerLinks).map((column, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`footer-column-${index}`} className="flex flex-col items-center lg:gap-7 gap-6 max-w-footer w-full mb-6 lg:mb-0 ">
            {column.map(({ text, url, externalLink }) => (
              <Link
                key={`footer-link-${text}`}
                className="lg:text-lg text-base lg:font-medium font-base hover:text-primary ease-in-out duration-150"
                href={url}
                passHref={externalLink}
                target={externalLink ? '_blank' : '_self'}
              >
                {text}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center font-base">
        <Link className="hover:text-primary ease-in-out duration-150 mr-3.5 max-w-mentionslegales w-full text-left" href={RoutesPathEnum.MENTIONS_LEGALES}>Mentions légales</Link>
        <Link className="hover:text-primary ease-in-out duration-150 ml-3.5 max-w-mentionslegales w-full text-right" href={RoutesPathEnum.MEDIAS}>Médias</Link>
      </div>
    </footer>
  );
}

export default Footer;
