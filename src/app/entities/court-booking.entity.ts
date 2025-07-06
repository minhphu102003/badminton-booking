export enum BookingStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
  REFUND_PENDING = 'REFUND_PENDING',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED',
  COMPLETED = 'COMPLETED',
}

export enum PaymentMethod {
  CASH = 'CASH',
  MOMO = 'MOMO',
  VNPAY = 'VNPAY',
}

export enum RefundStatus {
  NONE = 'NONE',
  REQUESTED = 'REQUESTED',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED',
}

export interface CourtsBooking {
  id: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  bookingStatus: BookingStatus;
  paymentMethod?: PaymentMethod;
  refundStatus: RefundStatus;
  field: {
    id: string;
    name: string;
  };
  user: {
    id: string;
    fullName: string;
  };
  vnp_TransactionNo?: string;
  vnp_TransactionDate?: string;
}
