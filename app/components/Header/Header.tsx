import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-96B6C5 text-white box-border p-5 h-[68px] leading-[34px]">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/">HOME</Link>
        </div>
        <div className="space-x-4">
          <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">REACT</Link>
          <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">NEXT</Link>
          <Link href="https://vuejs.org" target="_blank" rel="noopener noreferrer">VUE</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
