import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Sorteio da Mega Sena!</h1>
      <Link href="/sorteio">
        <a>Ir para o Sorteio</a>
      </Link>
    </div>
  );
}
