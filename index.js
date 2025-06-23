import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Welcome to Huatulco Tour Site</h1>
      <p>Explore the 7 Bays of Huatulco with professional guides and unforgettable experiences.</p>
      <ul>
        <li><Link href="/en">English</Link></li>
        <li><Link href="/es">Español</Link></li>
        <li><Link href="/fr">Français</Link></li>
      </ul>
    </main>
  );
}
