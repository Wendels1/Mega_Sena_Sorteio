import { useEffect, useState } from 'react';
import Pagina from '../components/pagina';
import Logo from '../components/Logo';
import NumeroSorteado from '../components/NumeroSorteado';

const Sorteio6 = () => {
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    const gerarNumeros = () => {
      const nums = new Set();
      while (nums.size < 6) nums.add(Math.floor(Math.random() * 61));
      return Array.from(nums);
    };
    setNumeros(gerarNumeros());
  }, []);

  return (
    <Pagina>
      <Logo />
      <h1>Sorteio Mega Sena </h1>
      {numeros.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {numeros.map(num => <NumeroSorteado key={num} numero={num} />)}
        </div>
      )}
    </Pagina>
  );
};

export default Sorteio6;
