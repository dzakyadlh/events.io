import { faFaceDizzy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ErrorFetch = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <FontAwesomeIcon icon={faFaceDizzy} className="text-9xl" />
      <div className="text-center">
        <p className="font-semibold text-xl text-black mb-2">
          Error Fetching Data
        </p>
        <p>Please refresh the page or try again later.</p>
      </div>
    </div>
  );
};
