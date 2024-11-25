import { cn } from '@/lib/utils';
import { MouseEventHandler } from 'react';

interface PaymentCardProps {
  name: string;
  balance: number;
  icon: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const PaymentCard = ({
  name,
  balance,
  icon,
  active,
  onClick,
}: PaymentCardProps) => {
  return (
    <div
      className={cn(
        'w-80 flex items-center justify-between border-white border-2 rounded-lg px-5 py-3',
        active ? 'bg-violet-700' : 'bg-transparent'
      )}
      onClick={onClick}
    >
      <div className="flex gap-5 items-center">
        <img src={icon} alt="payment method icon" className="w-10" />
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm">{name}</p>
          <p className="text-white font-light text-xs">Balance: ${balance}</p>
        </div>
      </div>
      <div className="rounded-full w-6 h-6 border-white border flex items-center justify-center">
        {active == true ? (
          <div className="rounded-full w-3 h-3 bg-green-500"></div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
