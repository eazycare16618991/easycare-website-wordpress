'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/logo.png"
              alt="이지케어 로고"
              width={120}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            <Navigation />
          </nav>

          {/* 상담신청 버튼 */}
          <div className="hidden md:flex gap-2">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              상담신청
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* 모바일 네비게이션 */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t">
            <Navigation mobile />
          </nav>
        )}
      </div>
    </header>
  );
}
