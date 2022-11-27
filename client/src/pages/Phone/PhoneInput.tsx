import { useState } from "react";

export default function App() {
  const [phone, setPhone] = useState("");
  const [updated, setUpdated] = useState(phone);

  const handleChange = (event: any) => {
    setPhone(event.target.value);
  };

  const handleClick = () => {
    setUpdated(phone);
  };

  return (
    <div>
      <input
        type="text"
        id="phone"
        name="phone"
        onChange={handleChange}
        value={phone}
      />

      <h2>{phone}</h2>

      <h2> {updated}</h2>

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
