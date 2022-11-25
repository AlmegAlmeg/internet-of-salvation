export default interface Product {
  title: string;
  subtitle: string;
  price: number;
  durationInMonths: Array<MonthsVariation>;
  sale: boolean | undefined;
}
