import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div className="fixed bottom-5 right-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg p-3 bg-red-600 text-white flex items-center gap-2 shadow-lg">
      <FontAwesomeIcon icon={faInfoCircle} className="text-lg" />
      <p className="text-lg overflow-ellipsis line-clamp-1">{message}</p>
    </div>
  );
};

export default ErrorAlert;
