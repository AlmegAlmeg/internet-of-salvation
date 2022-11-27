export default interface Package {
  title: string;
  subtitle: string;
  price: number;
  durationInMonths: Array<number>;
  sale: boolean | undefined;
}
