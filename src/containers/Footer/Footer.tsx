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
  { text: 'Billeterie', url: '/#' },
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
    <footer className="px-44 pt-16 bg-secondary text-white">
      <div className="flex flex-row justify-between mb-20">
        {divideLinksInColumns(footerLinks).map((column, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`footer-column-${index}`} className="flex flex-col items-center gap-10">
            {column.map(({ text, url }) => (
              <Link
                key={`footer-link-${text}`}
                className="text-xl font-semibold hover:text-primary ease-in-out duration-150"
                href={url}
              >
                {text}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between pb-4 font-medium">
        <Link className="hover:text-primary ease-in-out duration-150" href="/#">Mentions légales</Link>
        <Link className="hover:text-primary ease-in-out duration-150" href="/#">Médias</Link>
      </div>
    </footer>
  );
}

export default Footer;
