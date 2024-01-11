import { RowDataPacket } from "mysql2";

export default interface User extends RowDataPacket {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  date_birth?: string;
  user_role?: string;
  registration_data?: string;
}
