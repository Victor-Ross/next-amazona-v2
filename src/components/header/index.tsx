import Link from 'next/link';
import { Menu } from './menu';

export function Header() {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            Next Amazona V2
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  );
}
