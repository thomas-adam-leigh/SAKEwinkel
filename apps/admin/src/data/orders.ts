export type PaymentStatus = "Paid" | "Pending" | "Partially paid" | "Refunded";

export type FulfillmentStatus = "Fulfilled" | "Unfulfilled";

export interface Order {
  readonly id: string;
  readonly orderNumber: string;
  readonly date: string;
  readonly customer: string;
  readonly total: string;
  readonly paymentStatus: PaymentStatus;
  readonly fulfillmentStatus: FulfillmentStatus;
}

export const orders: Order[] = [
  {
    id: "1",
    orderNumber: "#1001",
    date: "Jan 10, 2025",
    customer: "Pieter van der Merwe",
    total: "R 1 250.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
  },
  {
    id: "2",
    orderNumber: "#1002",
    date: "Jan 11, 2025",
    customer: "Annika Botha",
    total: "R 450.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
  },
  {
    id: "3",
    orderNumber: "#1003",
    date: "Jan 12, 2025",
    customer: "Johan Pretorius",
    total: "R 2 780.00",
    paymentStatus: "Pending",
    fulfillmentStatus: "Unfulfilled",
  },
  {
    id: "4",
    orderNumber: "#1004",
    date: "Jan 13, 2025",
    customer: "Liesel Naudé",
    total: "R 890.00",
    paymentStatus: "Partially paid",
    fulfillmentStatus: "Unfulfilled",
  },
  {
    id: "5",
    orderNumber: "#1005",
    date: "Jan 14, 2025",
    customer: "Thabo Molefe",
    total: "R 3 200.00",
    paymentStatus: "Refunded",
    fulfillmentStatus: "Fulfilled",
  },
  {
    id: "6",
    orderNumber: "#1006",
    date: "Jan 15, 2025",
    customer: "Sarie du Plessis",
    total: "R 175.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
  },
  {
    id: "7",
    orderNumber: "#1007",
    date: "Jan 16, 2025",
    customer: "Mandla Dlamini",
    total: "R 620.00",
    paymentStatus: "Pending",
    fulfillmentStatus: "Unfulfilled",
  },
  {
    id: "8",
    orderNumber: "#1008",
    date: "Jan 17, 2025",
    customer: "Elana Swanepoel",
    total: "R 1 450.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
  },
  {
    id: "9",
    orderNumber: "#1009",
    date: "Jan 18, 2025",
    customer: "Bongani Khumalo",
    total: "R 950.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
  },
  {
    id: "10",
    orderNumber: "#1010",
    date: "Jan 19, 2025",
    customer: "Marietjie Venter",
    total: "R 2 100.00",
    paymentStatus: "Partially paid",
    fulfillmentStatus: "Unfulfilled",
  },
];
