import User from '@/models/user';

interface WalletProps {
  user: User;
}

const Wallet = ({ user }: WalletProps) => {
  return <div className="w-full min-h-screen flex flex-col gap-8 p-10"></div>;
};

export default Wallet;
