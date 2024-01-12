export const Data = [
  {
    icon: "fa-solid fa-chart-pie",
    tooltip: "Dashboard",
    name: "dashboard",
    navigate: "/",
  },
  {
    icon: "fas fa-warehouse",
    tooltip: "Inventory",
    name: "inventory",
    navigate: "/inventory",
  },

  {
    icon: "fa fa-sign-out",
    tooltip: "Logout",
    name: "logout",
    navigate: "/login",
  },
];

export const cards = [
  {
    text: "Total orders",
    icon: "fa-solid fa-file",
    iconColor: "text-neutral-500",
    money: "342",
    percent: "4.2%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Net sales",
    icon: "fa-solid fa-filter-circle-dollar",
    iconColor: "text-neutral-500",
    money: "$1,940",
    percent: "4.0%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Customer",
    icon: "fa-solid fa-person-rays",
    iconColor: "text-neutral-500",
    money: "$1,290",
    percent: "2.2%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Cancelled orders",
    icon: "fa-solid fa-circle-xmark",
    iconColor: "text-orange-600",
    money: "12",
    percent: "1.5%",
    percentColor: "text-orange-600",
    trend: "fa-solid fa-arrow-down",
  },
];

export const feedbackData = [
  {
    name: "rating1",
    text: "Not at all satisfied",
    icon: "fas fa-frown",
    iconColor: "text-red-400",
    borderColor: "border-red-400",
    value: "20",
  },
  {
    name: "rating2",
    text: "Dissatisfied",
    icon: "fas fa-frown-open",
    iconColor: "text-orange-400",
    borderColor: "border-orange-400",
    value: "30",
  },
  {
    name: "rating3",
    text: "Neither Satisfied nor dissatisfied",
    icon: "fas fa-meh",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-400",
    value: "10",
  },
  {
    name: "rating4",
    text: "Satissfied",
    icon: "fas fa-smile",
    iconColor: "text-green-200",
    borderColor: "border-green-200",
    value: "20",
  },
  {
    name: "rating5",
    text: "Completely satissfied",
    icon: "fas fa-smile-beam",
    iconColor: "text-green-500",
    borderColor: "border-green-500",
    value: "20",
  },
];

export const dataBar = [
  {
    x: "1-2AM",
    hours: 3230,
    color: "red",
  },
  {
    x: "2-3AM",
    hours: 2230,
    color: "red",
  },
  {
    x: "3-4AM",
    hours: 1630,
    color: "red",
  },
  {
    x: "4-5AM",
    hours: 1230,
    color: "red",
  },
  {
    x: "5-6AM",
    hours: 2230,
    color: "red",
  },
  {
    x: "6-7AM",
    hours: 1630,
    color: "red",
  },
  {
    x: "7-8AM",
    hours: 3230,
    color: "red",
  },
  {
    x: "8-9AM",
    hours: 4230,
    color: "red",
  },
  {
    x: "9-10AM",
    hours: 1630,
    color: "red",
  },
  {
    x: "10-11AM",
    hours: 1980,
    color: "red",
  },
];

export const dataPie = [
  { name: "delivered" },
  { name: "pending" },
  { name: "shipped" },
  { name: "cancelled" },
  { name: "processing" },
];

export const dataTm = [
  {
    id: 0,
    name: "January",
  },
  {
    id: 1,
    name: "February",
  },
  {
    id: 2,
    name: "March",
  },
  {
    id: 3,
    name: "April",
  },
  {
    id: 4,
    name: "May",
  },
  {
    id: 5,
    name: "June",
  },
  {
    id: 6,
    name: "July",
  },
  {
    id: 7,
    name: "August",
  },
  {
    id: 8,
    name: "September",
  },
  {
    id: 9,
    name: "October",
  },
  {
    id: 10,
    name: "November",
  },
  {
    id: 11,
    name: "December",
  },
];

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF1000"];

export const dataTableHeader = ["name", "category", "price", "quantity"];

export const dataTableRow = [
  {
    product_id: 1,
    name: "test",
    category: "test",
    price: 100.2,
    quantity: 2,
  },
  {
    product_id: 1,
    name: "test",
    category: "test",
    price: 100.2,
    quantity: 2,
  },
  {
    product_id: 1,
    name: "test",
    category: "test",
    price: 100.2,
    quantity: 2,
  },
  {
    product_id: 1,
    name: "test",
    category: "test",
    price: 100.2,
    quantity: 2,
  },
  {
    product_id: 1,
    name: "test",
    category: "test",
    price: 100.2,
    quantity: 2,
  },
];

export const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];
