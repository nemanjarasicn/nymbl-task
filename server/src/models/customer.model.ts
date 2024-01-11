import { RowDataPacket } from "mysql2";

export default interface Customer extends RowDataPacket {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  country?: string;
  registration_date?: string;
}

export default interface CustomerFeedback extends RowDataPacket {
  id?: number;
  customer_id?: string;
  message?: string;
  raiting?: string;
}
