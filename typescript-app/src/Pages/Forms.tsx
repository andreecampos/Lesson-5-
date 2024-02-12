import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Förhindrar refresh / omladdning av sidan
    if (!name || !email) return;

    const data = {
      name,
      email,
    };

    console.log(data);

    navigate("/result", { state: data });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={onNameChange} />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
