import './InvoiceCard.scss';
import Image from 'next/image';
import { ArrowRightIcon } from '@/app/presentation/icons';

type InvoiceCardProps = {
  spendAmount: number;
};

export default function InvoiceCard({ spendAmount }: InvoiceCardProps) {
  return (
    <div className="invoice-card">
      <div className="invoice-card__header">
        <div className="invoice-card__header-detail">
          <div>
            <span>RM</span>
            <span>{spendAmount}</span>
          </div>
          <p>spent on sport on this year</p>
        </div>
        <div className="invoice-card__img">
          <Image alt="" src="/imgs/user-invoice.png" height={100} width={100} />
        </div>
      </div>
      <div className="invoice-card__separate"></div>
      <div className="invoice-card__footer">
        <p>Claim up to RM1,000 in tax relief while staying active and healthy!</p>
        <div className="d-flex flex-column gap-1 ">
          <p>See last year&apos;s amount</p>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
}
