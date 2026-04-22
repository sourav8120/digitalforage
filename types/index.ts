export interface OrderData {
  name: string;
  email: string;
  service: string;
  date: string;
  amount?: number;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  price: string;
}