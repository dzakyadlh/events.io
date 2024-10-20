import { ClipLoader } from 'react-spinners';

export const CircularLoading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ClipLoader color="#6366f1" loading={true} size={50} />
    </div>
  );
};
