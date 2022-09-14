//Hooks - useEffect

import React, { useState } from "react";

function CounterExample() {
  //deklarasi variabel state baru yang kita sebut count
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Second Counter Example</h3>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>You can count on me!</button>
      <button onClick={() => setCount(count - 1)}>Ups, go back please!</button>
    </>
  );
}

export default CounterExample;
