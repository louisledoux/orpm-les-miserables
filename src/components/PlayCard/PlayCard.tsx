import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export type PlayCardProps = {
  image: StaticImageData,
  text: string,
  link: string,
}
function PlayCard({
  text, image, link,
}: PlayCardProps) {
  return (
    <Link className="w-full h-full" href={link} target="_blank">
      <div className="relative w-full h-[300px] text-primary hover:text-white transition">
        <Image className="absolute z-0 top-0 object-cover w-full h-full" src={image} alt="Image de la carte Jouer" />
        <div className="absolute z-10 top-0 object-cover w-full h-full bg-fadeSecondary" />
        <div className="flex justify-center items-center h-full">
          <div className="z-20 text-xl">{text}</div>
        </div>
      </div>
    </Link>
  );
}

export default PlayCard;
