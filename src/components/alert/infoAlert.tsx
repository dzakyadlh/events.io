import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

interface InfoAlertProps {
  message: string;
}

const InfoAlert = ({ message }: InfoAlertProps) => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 10, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-5 right-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg p-3 bg-indigo-400 text-black flex items-center gap-2 border-2 border-black"
    >
      <FontAwesomeIcon icon={faInfoCircle} className="text-lg" />
      <p className="overflow-ellipsis line-clamp-1">{message}</p>
    </motion.div>
  );
};

export default InfoAlert;
