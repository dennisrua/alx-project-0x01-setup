import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/">Posts</Link>
        <Link href="/">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
