'use client';

import Link from 'next/link';

const navItems = [
  { label: '홈', href: '/' },
  { label: '회사소개', href: '/about' },
  {
    label: '서비스',
    href: '/services',
    submenu: [
      { label: '해충방역', href: '/services/pest-control' },
      { label: '바이러스살균', href: '/services/disinfection' },
      { label: '완구소독', href: '/services/toy-cleaning' },
    ],
  },
  { label: 'AI기술', href: '/technology' },
  { label: '고객관리', href: '/crm' },
  { label: '고객지원', href: '/support' },
];

export default function Navigation({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {navItems.map((item) => (
        <div key={item.href} className={mobile ? 'mb-2' : 'relative group'}>
          <Link
            href={item.href}
            className={`${
              mobile
                ? 'block px-4 py-2 hover:bg-gray-100 rounded text-sm'
                : 'px-4 py-2 text-sm text-gray-700 hover:text-blue-600 transition font-medium'
            }`}
          >
            {item.label}
          </Link>

          {/* 서브메뉴 */}
          {item.submenu && (
            <div
              className={`${
                mobile
                  ? 'ml-4 mt-1 space-y-1'
                  : 'hidden group-hover:block absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg'
              }`}
            >
              {item.submenu.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={`${
                    mobile
                      ? 'block px-4 py-2 text-sm hover:bg-gray-100 rounded'
                      : 'block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
