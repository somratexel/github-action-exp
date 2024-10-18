import { useState } from "react";

export default function TestForm() {
  const [inputValue, setInputValue] = useState("");

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>{`Input: ${inputValue}`}</p>
    </form>
  );
}
