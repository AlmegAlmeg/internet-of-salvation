import { getPackages } from "../../services/packages";
import Package from "../../models/Package";
import { useEffect, useState } from "react";
import "./HomePage.scss";

export default function HomePage() {
  const [packages, setPackages] = useState<Array<Package> | undefined>([]);
  useEffect(() => {
    getPackages();
  }, [packages]);

  return;
}
