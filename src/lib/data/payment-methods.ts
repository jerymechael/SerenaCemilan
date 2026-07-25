export interface PaymentMethod {
  id: string;
  name: string;
  type: "qris" | "bank" | "ewallet";
  accountNumber?: string;
  accountName?: string;
}

export const paymentMethods: PaymentMethod[] = [
  { id: "qris", name: "QRIS", type: "qris" },
  { id: "bca", name: "BCA Virtual Account", type: "bank", accountNumber: "8808 1234 5678 90", accountName: "PT Serena Cemilan Nusantara" },
  { id: "bni", name: "BNI Virtual Account", type: "bank", accountNumber: "8808 2233 4455 66", accountName: "PT Serena Cemilan Nusantara" },
  { id: "bri", name: "BRI Virtual Account", type: "bank", accountNumber: "8808 9988 7766 55", accountName: "PT Serena Cemilan Nusantara" },
  { id: "mandiri", name: "Mandiri Virtual Account", type: "bank", accountNumber: "8808 1122 3344 55", accountName: "PT Serena Cemilan Nusantara" },
  { id: "gopay", name: "GoPay", type: "ewallet", accountNumber: "0812-3456-7890", accountName: "Serena Cemilan" },
  { id: "ovo", name: "OVO", type: "ewallet", accountNumber: "0812-3456-7890", accountName: "Serena Cemilan" },
  { id: "dana", name: "DANA", type: "ewallet", accountNumber: "0812-3456-7890", accountName: "Serena Cemilan" },
  { id: "shopeepay", name: "ShopeePay", type: "ewallet", accountNumber: "0812-3456-7890", accountName: "Serena Cemilan" },
];
