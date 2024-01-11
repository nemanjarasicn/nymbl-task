import { RowDataPacket } from "mysql2";

export default interface Product extends RowDataPacket {
  id?: number;
  name?: number;
  category?: string;
  price?: number;
  image?: string;
  quantity?: number;
}
