'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav>
      <ul className="flex space-x-8">
        <li>
          <Link 
            href="/" 
            className={`${
              pathname === '/' 
                ? 'text-gray-900 border-b-2 border-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors font-medium pb-1`}
          >
            首页
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className={`${
              pathname === '/about' 
                ? 'text-gray-900 border-b-2 border-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors font-medium pb-1`}
          >
            关于
          </Link>
        </li>
      </ul>
    </nav>
  );
}