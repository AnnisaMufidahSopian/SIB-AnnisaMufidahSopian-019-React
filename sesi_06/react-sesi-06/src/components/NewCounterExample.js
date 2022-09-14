//Hooks - useEffect Improve

import React, { useEffect, useState } from "react";

function CounterExample() {
  //deklarasi variabel state baru yang kita sebut count
  const [count, setCount] = useState(0);

  //mirip dengan compomemtDidMount dan componentDidUpdate :

  useEffect(() => {
    //memperbarui judul dokumen menggunakan API browser
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <h3>New Counter Example</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>You can count on me!</button>
      <button onClick={() => setCount(count - 1)}>Ups, go back please!</button>
    </>
  );
}

export default CounterExample;
