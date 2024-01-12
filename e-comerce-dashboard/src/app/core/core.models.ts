export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  companyId: number[];
  date_birth: string;
  user_role: string;
  password: string;
  registration_date: string;
}

export interface UserAuth {
  user: User;
  token: string;
}

interface OrderItems {
  id: number;
  product_id: number;
  quantity: number;
}

export interface Orders {
  order_id: number;
  user_id: number;
  products: OrderItems[];
  order_total_usd: string;
  status: string;
  timestamp: string;
}

export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  registration_date: string;
  user_id: number;
}

export interface CustomerFeedback {
  id: string;
  customer_id: string;
  message: string;
  rating: number;
  user_id: number;
}

export interface Products {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  quantity: string;
  user_id: number;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface MonthsYear {
  id: number;
  name: string;
}

export interface DataPieType {
  name: string;
}

export interface IconInt {
  icon: string;
  tooltip: string;
  name: string;
  navigate?: string;
}
