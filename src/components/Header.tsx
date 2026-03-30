import Link from 'next/link';
import CartButton from './CartButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💎</span>
            <span className="text-xl font-bold text-gray-800">玉石坊</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors">
              首页
            </Link>
            <Link href="/?category=翡翠" className="text-gray-600 hover:text-amber-600 transition-colors">
              翡翠
            </Link>
            <Link href="/?category=和田玉" className="text-gray-600 hover:text-amber-600 transition-colors">
              和田玉
            </Link>
            <Link href="/?category=银饰" className="text-gray-600 hover:text-amber-600 transition-colors">
              银饰
            </Link>
            <Link href="/?category=手工" className="text-gray-600 hover:text-amber-600 transition-colors">
              手工
            </Link>
          </nav>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
}
