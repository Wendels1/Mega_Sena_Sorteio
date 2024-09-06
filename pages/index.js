import Link from 'next/link';
import Pagina from '../components/pagina';
import Logo from '../components/Logo';

const Home = () => (
  <Pagina>
    <Logo />
    <h1>Bem-vindo ao Sorteio Mega Sena</h1>
    <p>Para iniciar o sorteio, clique no link abaixo:</p>
    <Link href="/sorteio" style={{ fontSize: '20px', color: '#0070f3', textDecoration: 'underline' }}>
      Ir para o Sorteio
    </Link>
  </Pagina>
);

export default Home;

