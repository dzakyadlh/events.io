import { cn } from '@/lib/utils';

interface PaymentCardProps {
  name: string;
  balance: number;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaymentCard = ({
  name,
  balance,
  active,
  setActive,
}: PaymentCardProps) => {
  return (
    <div
      className={cn(
        'flex justify-between border-white border-2 rounded-lg',
        active ? 'bg-violet-500' : 'bg-transparent'
      )}
      onClick={() => setActive(!active)}
    >
      <div className="flex gap-5 items-center">
        <img
          src="/images/mastercard.png"
          alt="payment method icon"
          className="w-20"
        />
        <div className="flex flex-col gap-5">
          <p className="text-white">{name}</p>
          <p className="text-white font-light text-xs">Balance: ${balance}</p>
        </div>
      </div>
      <div className="rounded-full w-10 h-10 border-white border-2 flex items-center justify-center">
        {active == true ? (
          <div className="rounded -full w-7 h-7 bg-green-500"></div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
