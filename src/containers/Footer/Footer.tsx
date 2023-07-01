import Link from 'next/link';
import RoutesPathEnum from '@/routes/Routes.enum';

type FooterLink = {
  text: string,
  url: string,
}

const footerLinks: FooterLink[] = [
  { text: 'Accueil', url: RoutesPathEnum.HOMEPAGE },
  { text: 'Auteur et œuvres', url: '/#' },
  { text: 'L\'histoire et les personnages', url: '/#' },
  { text: 'La comédie musicale', url: '/#' },
  { text: 'Jouons !', url: '/#' },
  { text: 'L\'orchestre', url: RoutesPathEnum.ORCHESTRE },
  { text: 'L\'équipe artistique', url: '/#' },
  { text: 'L\'équipe technique', url: '/#' },
  { text: 'La troupe', url: '/#' },
  { text: 'Nos précédents spectacles', url: '/#' },
  { text: 'L\'agenda', url: '/#' },
  { text: 'Billetterie', url: '/#' },
  { text: 'Nous soutenir', url: '/#' },
  { text: 'Nous contacter', url: '/#' },
  { text: 'Rejoindre l\'équipe', url: '/#' },
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
            {column.map(({ text, url }) => (
              <Link
                key={`footer-link-${text}`}
                className="lg:text-lg text-base lg:font-medium font-base hover:text-primary ease-in-out duration-150"
                href={url}
              >
                {text}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center font-base">
        <Link className="hover:text-primary ease-in-out duration-150 mr-3.5 max-w-105px w-full text-left" href="/#">Mentions légales</Link>
        <Link className="hover:text-primary ease-in-out duration-150 ml-3.5 max-w-105px w-full text-right" href="/#">Médias</Link>
      </div>
    </footer>
  );
}

export default Footer;
