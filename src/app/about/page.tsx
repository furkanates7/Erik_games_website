import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1>Hakkında</h1>
      <p>Bu, hakkında sayfasıdır.</p>
      <Link href="/">Ana Sayfaya Git</Link>
    </div>
  );
}