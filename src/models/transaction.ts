export default interface Transaction {
  _id: string;
  user_id?: string;
  amount?: number;
  payment_method?: string;
  payment_account_number?: string;
  event_name?: string;
  event_host?: string;
  created_at?: Date;
}
