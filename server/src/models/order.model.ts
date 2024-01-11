import { RowDataPacket } from "mysql2";

export default interface OrderItems extends RowDataPacket {
  id?: number;
  product_id?: number;
  quantity?: number;
}

export default interface Order extends RowDataPacket {
  order_id?: number;
  user_id?: number;
  products?: OrderItems[];
  order_total_usd?: number;
  status?: string;
  timestamp?: string;
}
