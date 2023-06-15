import MainImgItem, { MainImgProps } from "@/components/MainImgItem/MainImgItem";

interface MainImgContainerProps {
  items: MainImgProps[];
}

function MainImgContainer({ items }: MainImgContainerProps) {
  return (
    <div className="flex max-w-content mx-auto justify-center">
      {items.map(({ imageSrc, alt, style }, index) => (
        <MainImgItem key={`${alt}-${index}`} imageSrc={imageSrc} alt={alt} style={style} />
      ))}
    </div>
  );
}

export default MainImgContainer;