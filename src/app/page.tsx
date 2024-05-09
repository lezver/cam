import Link from 'next/link';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home {new Date().toTimeString()}</h1>
      <MagicButton />
      <Link
        href="/dashboard"
        className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded m-2 block w-fit"
      >
        Dashboard
      </Link>
      <Link
        href="/companies"
        className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded m-2 block w-fit"
      >
        Companies
      </Link>
    </main>
  );
}
