import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
  return (
    <div className="py-[240px] text-center">
      <FontAwesomeIcon className="text-secondary text-6xl lg:text-9xl" icon={faCompactDisc} spin />
    </div>
  );
}
