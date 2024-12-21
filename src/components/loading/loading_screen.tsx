import { ClipLoader } from 'react-spinners';

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ClipLoader color="#8b5cf6" size={100} />
    </div>
  );
}
