import Package from "../models/Package";
import axios from "axios";

const SERVER_URL: string = "http://localhost:8080/content/packages";

export async function getPackages(): Promise<Array<Package>> {
  const res = await axios.get(`${SERVER_URL}`);
  const data = res.data.message;

  if (Array.isArray(data)) return data;
  else return [];
}
