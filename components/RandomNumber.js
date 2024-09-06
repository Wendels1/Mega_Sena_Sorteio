import { useState } from 'react';

export default function RandomNumber() {
  const [number, setNumber] = useState(null);

  const gerarNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 61);
    setNumber(numeroAleatorio);
  };

  return (
    <div>
      <button onClick={gerarNumero}>Sortear Número</button>
      {number !== null && <p>Número: {number}</p>}
    </div>
  );
}
